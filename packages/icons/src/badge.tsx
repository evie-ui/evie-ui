import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBadge = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M232-238h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-303q-15 5-24 19t-9 32zm361-67h120q10.833 0 17.917-7.116 7.083-7.117 7.083-18Q738-341 730.917-348q-7.084-7-17.917-7H593q-10.833 0-17.917 7.116-7.083 7.117-7.083 18Q568-319 575.083-312q7.084 7 17.917 7m-239-50q22.5 0 38.25-15.75T408-409q0-22.5-15.75-38.25T354-463q-22.5 0-38.25 15.75T300-409q0 22.5 15.75 38.25T354-355m239-63h120q10.833 0 17.917-7.116 7.083-7.117 7.083-18Q738-454 730.917-461q-7.084-7-17.917-7H593q-10.833 0-17.917 7.116-7.083 7.117-7.083 18Q568-432 575.083-425q7.084 7 17.917 7M149-55q-39.05 0-66.525-27.475Q55-109.95 55-149v-462q0-39.463 27.475-67.231Q109.95-706 149-706h216v-122q0-34 21.384-56 21.385-22 57.527-22h73.678Q552-906 574-884t22 56v122h215q39.463 0 67.231 27.769Q906-650.463 906-611v462q0 39.05-27.769 66.525Q850.463-55 811-55zm0-94h662v-462H594v30q-4 30-27.5 45t-48.911 15h-74.178Q417-521 393-536.5T366-581v-30H149zm303-459h57v-211h-57zm28 228" />
  </Svg>
);
