import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOpenInPhone = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M271-17q-39.05 0-66.525-27.475Q177-71.95 177-111v-249h94v159h418v-558H271v159h-94v-249q0-39.05 27.475-66.525Q231.95-943 271-943h418q39.05 0 66.525 27.475Q783-888.05 783-849v738q0 39.05-27.475 66.525Q728.05-17 689-17zm0-124v30h418v-30zm168-309H110q-12.75 0-21.375-8.675Q80-467.351 80-480.175 80-493 88.625-501.5T110-510h329l-58-58q-9-9-9-21.1 0-12.1 9-20.9 9-9 21.5-9t21.5 9l97 96q14 14.727 14 34.364Q535-460 521-446l-97 97q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5zM271-819h418v-30H271zm0 0v-30zm0 678v30z" />
  </Svg>
);
