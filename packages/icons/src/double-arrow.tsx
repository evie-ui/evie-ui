import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDoubleArrow = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M409-480 243-703q-18-23-4.5-48.5T281-777q11 0 21 5t17 14l207 278-207 278q-7 9-17 14t-21 5q-29 0-42-25t5-50zm295 0L537-703q-17-23-4-48.5t43-25.5q10 0 20 4.5t17 13.5l208 279-208 278q-7 10-17 14.5t-20 4.5q-29 0-42.5-25t4.5-49z" />
  </Svg>
);
