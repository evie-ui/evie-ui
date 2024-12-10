import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDestructionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-55q-36 0-61.5-25.5T95-142v-162q0-37 25.5-62t61.5-25h596q37 0 62.5 25t25.5 62v162q0 36-25.5 61.5T778-55zm67-395-129-75q-11-6-15.5-16t-2.5-20q2-10 10-18t21-11l160-28-43-159q-4-11 .5-21t13.5-16q8-6 19-7t21 6l134 96 80-144q6-11 16-15.5t20-2.5q10 3 19 10.5t11 19.5l27 162 156-44q11-4 21.5 1.5T805-718q6 8 7 18.5t-6 20.5l-95 136 162 93z" />
  </Svg>
);