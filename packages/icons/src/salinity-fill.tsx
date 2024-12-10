import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSalinityFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.897-55q-147.659 0-246.278-101.165Q135-257.329 135-408h691q0 151-99.222 252T479.897-55M182.105-466Q166-466 155.5-476.5t-10.5-27q0-16.5 10.693-27t26.5-10.5Q198-541 209-530.362q11 10.637 11 26.362 0 17-10.895 27.5-10.894 10.5-27 10.5M379-466q-17 0-27.5-10.5t-10.5-27q0-16.5 10.5-27t27-10.5q16.5 0 27 10.638Q416-519.725 416-504q0 17-10.638 27.5Q394.725-466 379-466m201.105 0Q564-466 553.5-476.5t-10.5-27q0-16.5 10.693-27t26.5-10.5Q596-541 607-530.362q11 10.637 11 26.362 0 17-10.895 27.5-10.894 10.5-27 10.5m198 0Q762-466 751.5-476.5t-10.5-27q0-16.5 10.693-27t26.5-10.5Q794-541 805-530.362q11 10.637 11 26.362 0 17-10.895 27.5-10.894 10.5-27 10.5m-497-123Q265-589 254.5-599.693t-10.5-26.5Q244-642 254.693-653q10.693-11 26.5-11T308-653.105q11 10.894 11 27Q319-610 308.105-599.5q-10.894 10.5-27 10.5m398 0Q663-589 652.5-599.693t-10.5-26.5Q642-642 652.693-653q10.693-11 26.5-11T706-653.105q11 10.894 11 27Q717-610 706.105-599.5q-10.894 10.5-27 10.5m-199-2Q464-591 453.5-601.895q-10.5-10.894-10.5-27Q443-645 453.693-655.5t26.5-10.5Q496-666 507-655.307q11 10.693 11 26.5T507.105-602q-10.894 11-27 11m-101-119Q363-710 352.5-720.5t-10.5-27q0-16.5 10.693-27t26.5-10.5Q395-785 406-774.362q11 10.637 11 26.362 0 17-10.895 27.5-10.894 10.5-27 10.5m201.702 0Q565-710 554-720.5q-11-10.5-11-27t10.895-27q10.894-10.5 27-10.5Q597-785 607.5-774.362 618-763.725 618-748q0 17-10.693 27.5t-26.5 10.5M480.105-825Q464-825 453.5-835.5t-10.5-27q0-16.5 10.693-27t26.5-10.5Q496-900 507-889.362q11 10.637 11 26.362 0 17-10.895 27.5-10.894 10.5-27 10.5" />
  </Svg>
);
