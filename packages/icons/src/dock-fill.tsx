import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDockFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M309-59q0-13 8.5-21.5T339-89h282q13 0 21.5 8.5T651-59q0 13-8.5 21.5T621-29H339q-13 0-21.5-8.5T309-59m-6-90q-39.05 0-66.525-27.475Q209-203.95 209-243v-594q0-39.05 27.475-66.525Q263.95-931 303-931h354q39.05 0 66.525 27.475Q751-876.05 751-837v594q0 39.05-27.475 66.525Q696.05-149 657-149zm0-214h354v-354H303z" />
  </Svg>
);
