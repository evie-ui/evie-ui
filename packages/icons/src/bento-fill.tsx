import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBentoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M627-527v-250h176q39.05 0 66.525 27.475Q897-722.05 897-683v156zM157-183q-39.05 0-66.525-27.475Q63-237.95 63-277v-406q0-39.05 27.475-66.525Q117.95-777 157-777h376v594zm140.941-230Q326-413 345.5-432.941q19.5-19.941 19.5-47Q365-508 345.559-527.5q-19.441-19.5-47.5-19.5Q271-547 251-527.559q-20 19.441-20 47.5Q231-453 250.941-433q19.941 20 47 20M627-183v-250h270v156q0 39.05-27.475 66.525Q842.05-183 803-183z" />
  </Svg>
);
