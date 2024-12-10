import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPriorityHigh = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.257-80Q442-80 414.5-107.451q-27.5-27.452-27.5-66Q387-212 414.739-239q27.739-27 65.996-27 38.256 0 65.261 27.451 27.004 27.452 27.004 66Q573-134 545.757-107q-27.244 27-65.5 27m.154-286Q446-366 422.5-389.469T399-447v-346q0-33.825 23.089-57.912Q445.177-875 479.589-875 514-875 537.5-850.912 561-826.825 561-793v346q0 34.062-23.089 57.531Q514.823-366 480.411-366" />
  </Svg>
);
