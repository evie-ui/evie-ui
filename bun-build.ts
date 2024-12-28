import { parseAsync } from "oxc-parser";
import { dts } from "./bun-dts";

type Props = {
  entrypoints: string[];
};

const IS_PROD = process.env.NODE_ENV === "production";

export const build = async (
  { entrypoints }: Props = {
    entrypoints: [],
  }
) => {
  console.info("Bundling...");

  if (IS_PROD) await Bun.$`rimraf ./dist`;

  const output = await Bun.build({
    entrypoints,
    outdir: "./dist",
    target: "node",
    format: "esm",
    splitting: true,
    sourcemap: IS_PROD ? "none" : "external",
    minify: IS_PROD,
    packages: "external",
    root: "./src",
    plugins: [dts],
  });

  if (!output.success) {
    console.error(output.logs);
    throw new Error("Bundling failed!");
  }

  console.log("Removing duplicated exports...");

  for (const filePath of output.outputs.filter(
    (o) => o.kind === "entry-point"
  )) {
    const file = Bun.file(filePath.path);

    let content = await file.text();
    const lexerFile = await parseAsync("file.js", content);

    const allExports = lexerFile.module.staticExports
      .map((s) => s.entries.map((e) => e.exportName))
      .flat();
    const nonDuplicatedExports: typeof allExports = [];
    const duplicatedExports: typeof allExports = [];

    for (const thisExport of allExports) {
      if (!nonDuplicatedExports.find((e) => e.name === thisExport.name)) {
        nonDuplicatedExports.push(thisExport);
      } else {
        duplicatedExports.push(thisExport);
      }
    }

    duplicatedExports.sort((a, b) => (a.start! < b.start! ? 1 : -1));

    for (const duplicatedExport of duplicatedExports) {
      content = lexerFile.magicString
        .remove(duplicatedExport.start!, duplicatedExport.end! + 1)
        .toString();
    }

    await Bun.write(filePath.path, content);
  }

  console.info("Done!");
};
