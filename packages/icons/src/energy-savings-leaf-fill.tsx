import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEnergySavingsLeafFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m423-269 219-200q10-10 6-23.5T630-508l-171-17 103-142q5-5 3.5-12t-5.5-11q-5-5-12-5.5t-12 4.5L318-492q-10 9-6 23t18 15l172 19-104 142q-4 5-3 11.5t6 11.5q4 5 11 5.5t11-4.5m57 174q-68 0-128-21.5T243-177l-69 69q-7 7-15 10t-17 3q-20 0-33.5-13.5T95-142q0-9 3-17t10-15l69-69q-39-49-60.5-109T95-480q0-161 112.5-273.5T480-866h291q40 0 67.5 27.5T866-771v291q0 160-112.5 272.5T480-95" />
  </Svg>
);
