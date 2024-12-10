import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSportsMartialArts = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M545-445 526-45q-1 17-13 28T481-6q-16 0-28-11t-13-28l-17-361-168-97-15 49 62 107q8 15 4 31t-18 25q-15 8-32 3.5T230-307l-70-118q-5-8-6.5-17t1.5-19l44-154 228-131-80-82q-13-12-12.5-28.5T348-885q12-13 28-13t29 13l113 112q17 17 14 40t-23 35l-90 51 89 66 292-260q12-10 27.5-9t27.5 15q10 10 10.5 24.5T855-785zM168-671q-35 0-60-25t-25-60q0-35 25-59.5t60-24.5q34 0 59 24.5t25 59.5q0 35-25 60t-59 25" />
  </Svg>
);
