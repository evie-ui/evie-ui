import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDomainFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M57-180v-577q0-38.75 27.625-66.375T151-851h248q38.75 0 66.375 27.625T493-757v71h316q38.75 0 66.375 27.625T903-592v412q0 39.8-27.625 66.9Q847.75-86 809-86H151q-38.75 0-66.375-27.1T57-180m83 11h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm165 495h105v-105H305zm0-165h105v-105H305zm0-165h105v-105H305zm0-165h105v-105H305zm165 495h350v-435H470v105h80v60h-80v105h80v60h-80zm185-270v-60h60v60zm0 165v-60h60v60z" />
  </Svg>
);
