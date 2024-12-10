import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHotelFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M58.825-166Q41-166 29-178.125T17-208v-553q0-18.125 12.175-29.562Q41.351-802 59.175-802 77-802 88.5-790.562 100-779.125 100-761v370h364v-232q0-38.75 27.394-66.375Q518.787-717 559-717h216q69.3 0 118.65 49.35Q943-618.3 943-549v342q0 18.125-11.488 29.562Q920.024-166 901.825-166 884-166 872-178.125T860-208v-89H100v90q0 18.125-11.488 29.562Q77.024-166 58.825-166M276.47-443q-50 0-84.236-34Q158-511 158-561t34-83.5q34-33.5 84-33.5t83.5 33.265q33.5 33.264 33.5 83.264 0 50-33.265 84.236Q326.471-443 276.471-443Z" />
  </Svg>
);
