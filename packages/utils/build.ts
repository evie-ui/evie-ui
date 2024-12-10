import { build } from "../../bun-build";

const entrypoints = [
  "./src/errors/index.ts",
  "./src/utils/array.ts",
  "./src/utils/color.ts",
  "./src/utils/currency.ts",
  "./src/utils/file.ts",
  "./src/utils/map.ts",
  "./src/utils/mask.ts",
  "./src/utils/number.ts",
  "./src/utils/object.ts",
  "./src/utils/promise.ts",
  "./src/utils/switch.ts",
  "./src/utils/string.ts",
  "./src/utils/theme.ts",
  "./src/utils/date/index.ts",
];

await build({ entrypoints });
