import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgKeyboardBackspaceFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m277-434 115 116q14 14 13.5 33T391-252q-14 14-33.5 14T324-252L128-447q-7-7-11-16t-4-18q0-9 4-18t11-16l197-196q14-14 33.5-14t33.5 14q14 14 14 33.5T392-644L277-528h541q20 0 34 13.5t14 33.5q0 20-14 33.5T818-434z" />
  </Svg>
);
