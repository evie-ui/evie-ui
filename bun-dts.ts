import type { BunPlugin } from "bun";
import { copyFile, exists, readFile, writeFile } from "fs/promises";
import { join } from "path";
import {
  createProgram,
  formatDiagnosticsWithColorAndContext,
  getPreEmitDiagnostics,
  JsxEmit,
  ModuleDetectionKind,
  ModuleKind,
  ModuleResolutionKind,
  ScriptTarget,
  sys,
} from "typescript";

export const dts: BunPlugin = {
  name: "dts",
  setup: async (build) => {
    console.info("Generating types...");

    const outdir = build.config.outdir!;
    const entrypoints = build.config.entrypoints;

    const program = createProgram({
      rootNames: entrypoints,
      options: {
        // lib: ["ESNext"],
        module: ModuleKind.ESNext,
        target: ScriptTarget.ESNext,
        moduleResolution: ModuleResolutionKind.Bundler,
        moduleDetection: ModuleDetectionKind.Force,
        allowImportingTsExtensions: true,
        strict: true,
        downlevelIteration: true,
        skipLibCheck: true,
        jsx: JsxEmit.Preserve,
        allowSyntheticDefaultImports: true,
        forceConsistentCasingInFileNames: true,
        allowJs: false,
        // types: ["bun-types"],
        declaration: true,
        declarationDir: outdir,
        emitDeclarationOnly: true,
      },
    });

    const emitResult = program.emit();
    const diagnostics = getPreEmitDiagnostics(program).concat(
      emitResult.diagnostics
    );

    if (diagnostics.length > 0) {
      console.error(
        formatDiagnosticsWithColorAndContext(diagnostics, {
          getCurrentDirectory: sys.getCurrentDirectory,
          getNewLine: () => sys.newLine,
          getCanonicalFileName: sys.useCaseSensitiveFileNames
            ? (fileName: string) => fileName
            : (fileName: string) => fileName.toLowerCase(),
        })
      );
    }

    const readMePath = join("..", "README.md");

    if (await exists(readMePath)) {
      await copyFile(readMePath, join(outdir, "README.md"));
    }

    const outPackageJsonPath = join(outdir, "package.json");
    // await copyFile("package.json", outPackageJsonPath);

    // if there is a github action ref name set, adjust the version in the package json
    if (process.env["REF_NAME"]) {
      console.info("Adjust package.json version...");

      const outPackageJsonContent = JSON.parse(
        await readFile(outPackageJsonPath, { encoding: "utf-8" })
      );
      outPackageJsonContent.version = process.env["REF_NAME"];
      await writeFile(
        outPackageJsonPath,
        JSON.stringify(outPackageJsonContent),
        { encoding: "utf-8" }
      );
    }
  },
};
