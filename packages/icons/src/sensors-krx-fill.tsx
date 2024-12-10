import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSensorsKrxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M142-480q0 41 9 79t27 71q7 16 4.5 34T164-267q-14 10-33.5 6T104-282q-24-44-36.5-94T55-480q0-54 12.5-103t36.5-94q8-16 27-21t33 5q16 11 18.5 28.5T178-630q-18 33-27 71t-9 79m338 238q-100 0-169-69t-69-169q0-100 69-169t169-69q100 0 169 69t69 169q0 100-69 169t-169 69m338-238q0-41-9-79t-27-71q-8-17-5-34.5t19-28.5q14-10 33-5t27 21q24 45 36.5 94T905-480q0 54-12.5 104T856-282q-8 17-27 21t-33-6q-16-11-19-29t5-34q18-33 27-71t9-79" />
  </Svg>
);
