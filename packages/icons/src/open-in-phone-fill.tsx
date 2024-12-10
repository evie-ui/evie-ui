import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOpenInPhoneFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M271-17q-39.05 0-66.525-27.475Q177-71.95 177-111v-249h94v159h418v-558H271v159h-94v-249q0-39.05 27.475-66.525Q231.95-943 271-943h418q39.05 0 66.525 27.475Q783-888.05 783-849v738q0 39.05-27.475 66.525Q728.05-17 689-17zm168-433H110q-13 0-21.5-8.5T80-480q0-13 8.5-21.5T110-510h329l-58-58q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l97 96q14 14.364 14 34.182T521-446l-97 97q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5z" />
  </Svg>
);
