import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPlayDisabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M664-383 312-728v-33q4-22 25-31.5t42 3.5l377 267q22 14 23 39t-21 39zM773-75 541-305 379-203q-24 15-48 1.5T307-243v-296L75-772q-11-11-10.5-25T76-822q11-10 25-10t25 10l697 698q10 10 10 24t-11 25q-11 11-24.5 11T773-75" />
  </Svg>
);
