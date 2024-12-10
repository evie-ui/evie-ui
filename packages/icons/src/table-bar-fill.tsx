import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTableBarFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m234-204 44-112q12-28 36-44.5t54-16.5h65v-116q-167-7-271.5-51.5T57-654q0-70 121-116.5T480-817q180 0 301.5 46.5T903-654q0 65-104.5 109.5T527-493v116h65q29 0 54 17t36 44l44 112q9 22-3.5 41.5T685-143q-13 0-25.5-8T643-172l-44-111H362l-44 112q-5 13-17 20.5t-26 7.5q-24 0-37-19.5t-4-41.5" />
  </Svg>
);
