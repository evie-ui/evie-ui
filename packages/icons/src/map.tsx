import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMap = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m581-105-232-82-189 77q-13 4-24 2t-20-8q-10-6-15.5-15.5T95-154v-577q0-21 12-38t32-24l179-63q7-2 15-3.5t16-1.5q8 0 16 1.5t15 3.5l232 82 189-77q12-4 23-2.5t20 7.5q10 6 16 16t6 23v584q0 20-12.5 34.5T822-168l-179 63q-7 3-15 4.5T612-99q-8 0-16-1.5t-15-4.5m-3-101v-484l-196-66v484zm60 0 133-43v-492l-133 51zm-449-15 133-51v-484l-133 44zm449-469v484zm-316-66v484z" />
  </Svg>
);
