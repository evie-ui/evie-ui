import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTramFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M135-271v-383q0-103.675 71.5-138.338Q278-827 449-830l31-63H293.526q-10.628 0-17.577-7.616-6.949-7.617-6.949-18Q269-929 276.083-936q7.084-7 17.917-7h372.295q10.538 0 17.622 7.116 7.083 7.117 7.083 18 0 9.884-7.083 17.384Q676.833-893 666-893H540l-29 63q144 3 229.5 37.685Q826-757.631 826-654v383q0 72.521-49 125.761Q728-92 658-88l26 26q19 19 8.418 43.5Q681.837 6 655.544 6 647 6 640 3t-12.067-9.067L547-86H413L333.067-6.067Q327 0 319.85 3T305 6q-27.167 0-37.583-24.5Q257-43 276-62l26-26q-70-4-118.5-57.239Q135-198.479 135-271m348.059 31Q506-240 522-256.059q16-16.059 16-39Q538-317 521.941-333.5q-16.059-16.5-39-16.5T444-333.441q-16 16.559-16 38.5Q428-272 444.059-256q16.059 16 39 16M229-465h501v-155H229z" />
  </Svg>
);
