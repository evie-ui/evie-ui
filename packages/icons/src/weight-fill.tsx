import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWeightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.5-695q23 0 38.25-15.25T533-747.5q0-23-15.112-37.75Q502.775-800 480-800q-22.5 0-37.25 14.969T428-747.5q0 21.562 14.75 37.031Q457.5-695 479.5-695m127.5 0h57q35.108 0 62.054 23Q753-649 757-614l57 401q6 43-21.988 75.5T721-105H240q-43.464 0-71.732-32.5T146-213l57-401q4-35 30.946-58T297-695h57q-7-12-10-25.017-3-13.016-3-27.983 0-57.083 40.5-98.042Q422-887 480-887t99 40.958q41 40.959 41 98.042 0 15.1-3.5 28.05Q613-707 607-695" />
  </Svg>
);
