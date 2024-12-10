import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBento = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M157-183q-39.05 0-66.525-27.475Q63-237.95 63-277v-406q0-39.05 27.475-66.525Q117.95-777 157-777h646q39.05 0 66.525 27.475Q897-722.05 897-683v406q0 39.05-27.475 66.525Q842.05-183 803-183zm410-344h236v-156H567zM157-277h316v-406H157zm163.059-136Q293-413 273-432.941q-20-19.941-20-47.5t19.941-47.059q19.941-19.5 47.5-19.5t47.059 19.525q19.5 19.524 19.5 47.416Q387-453 367.475-433q-19.524 20-47.416 20M567-277h236v-156H567z" />
  </Svg>
);
