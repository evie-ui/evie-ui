import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPieChartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M527-527v-316q124 14 212 103t104 213zm-95 410q-137-18-227-121.5T115-480q0-138 90-241.5T432-843zm95 0v-315h316q-15 123-103.5 212.5T527-117" />
  </Svg>
);
