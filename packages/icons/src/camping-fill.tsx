import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCampingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M70-110v-120q0-16 5-30t14-27l332-450-42-57q-4-5 2-20t13-28.5q7-13.5 8.5-20.5t-11.5 2q15-12 34-8t32 19l23 34 25-34q12-15 31-18.5t35 8.5q15 12 18 31.5t-9 34.5l-40 57 331 450q9 13 14 27t5 30v120q0 20-13.5 33.5T843-63H118q-21 0-34.5-13.5T70-110m264-47h291L480-361z" />
  </Svg>
);
