import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPlayDisabled = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m664-383-70-69 69-44-307-188-44-44v-33q4-22 25-31.5t42 3.5l377 267q22 14 23 39t-21 39zM773-75 541-305 379-203q-24 15-48 1.5T307-243v-296L75-772q-11-11-10.5-25T76-822q11-10 25-10t25 10l697 698q10 10 10 24t-11 25q-11 11-24.5 11T773-75M392-312l83-52-83-85zm-36-372" />
  </Svg>
);
