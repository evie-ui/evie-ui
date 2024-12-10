import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDock = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M309-59.175Q309-72 317.625-80.5T339-89h282q12.75 0 21.375 8.675Q651-71.649 651-58.825 651-46 642.375-37.5T621-29H339q-12.75 0-21.375-8.675Q309-46.351 309-59.175M303-149q-39.05 0-66.525-27.475Q209-203.95 209-243v-594q0-39.05 27.475-66.525Q263.95-931 303-931h354q39.05 0 66.525 27.475Q751-876.05 751-837v594q0 39.05-27.475 66.525Q696.05-149 657-149zm0-154v60h354v-60zm0-60h354v-354H303zm0-414h354v-60H303zm0 0v-60zm0 474v60z" />
  </Svg>
);
