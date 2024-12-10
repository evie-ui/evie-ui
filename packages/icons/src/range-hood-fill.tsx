import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRangeHoodFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m71-479 186-193v-97q0-39 27.5-66.5T351-863h258q39 0 66.5 27.5T703-769v97l185 193zm80 342q-39 0-66.5-27.5T57-231v-188h846v188q0 39-27.5 66.5T809-137zm229-162h201q10 0 17.5-7.5T606-325q0-10-7.5-17.5T581-350H380q-10 0-18 7.5t-8 17.5q0 11 7.5 18.5T380-299" />
  </Svg>
);
