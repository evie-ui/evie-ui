import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSensorsKrx = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M142-480q0 41 9.5 78.5T178-330q8 17 5 35t-19 28q-15 10-33.5 6T104-282q-24-44-36.5-94T55-480q0-54 12.5-103t36.5-94q8-16 26.5-21t33.5 5q16 10 19 28t-5 35q-17 34-26.5 71.5T142-480m338 238q-100 0-169-69t-69-169q0-100 69-169t169-69q100 0 169 69t69 169q0 100-69 169t-169 69m0-87q63 0 107-44t44-107q0-63-44-107t-107-44q-63 0-107 44t-44 107q0 63 44 107t107 44m338-151q0-41-9.5-78.5T782-630q-8-17-5-35t19-28q15-10 33-5t27 21q24 45 36.5 94T905-480q0 54-12.5 104T856-282q-9 17-27 21t-33-6q-16-10-19-28t5-35q17-34 26.5-71.5T818-480m-338 0" />
  </Svg>
);
