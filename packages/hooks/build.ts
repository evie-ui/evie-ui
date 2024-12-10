import { build } from "../../bun-build";

const entrypoints = ["./src/index.ts"];

await build({ entrypoints });
