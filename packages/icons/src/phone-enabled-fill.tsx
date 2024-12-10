import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPhoneEnabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M164-95q-28 0-48.5-20T95-164v-141q0-30 16.5-50t47.5-29l99-23q24-6 44.5 0t38.5 24l100 101q35-18 68.5-44t66.5-61q31-30 56.5-62t47.5-68l-104-95q-17-14-22-34t-1-46l27-110q7-31 26.5-47.5T657-866h140q29 0 49 20.5t20 49.5q0 121-58.5 246.5T642-317Q536-211 411-153T164-95" />
  </Svg>
);
