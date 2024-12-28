import { build } from "../../bun-build";

const entrypoints = [
  "./src/components/accordion/index.ts",
  "./src/components/avatar/index.ts",
  "./src/components/calendar/index.tsx",
  "./src/components/card/index.ts",
  "./src/components/carousel/index.ts",
  "./src/components/checkbox/index.tsx",
  "./src/components/chip/index.tsx",
  "./src/components/collapsible/index.ts",
  "./src/components/date-picker/index.tsx",
  "./src/components/form-control/index.ts",
  "./src/components/icon/index.tsx",
  "./src/components/icon-button/index.tsx",
  "./src/components/image/index.tsx",
  "./src/components/input/index.ts",
  "./src/components/list/index.tsx",
  "./src/components/link/index.tsx",
  "./src/components/modal/index.ts",
  "./src/components/multi-step/index.ts",
  "./src/components/page/index.ts",
  "./src/components/pressable/index.tsx",
  "./src/components/progress-bar/index.ts",
  "./src/components/progress-circle/index.ts",
  "./src/components/radio-group/index.ts",
  "./src/components/scrollview/index.tsx",
  "./src/components/section/index.ts",
  "./src/components/segmented-control/index.tsx",
  "./src/components/separator/index.tsx",
  "./src/components/status-bar/index.tsx",
  "./src/components/stepper/index.tsx",
  "./src/components/switch/index.tsx",
  "./src/components/tabs/index.ts",
  "./src/components/text/index.ts",
  "./src/components/text-button/index.tsx",
  "./src/components/view/index.tsx",
  "./src/components/grid.tsx",
  "./src/provider/index.tsx",
  "./src/components/magic-modal/index.ts",
  "./src/theme/index.ts",
  "./src/extend-theme/index.ts",
  "./src/_experimental/index.ts",
];

await build({ entrypoints });
