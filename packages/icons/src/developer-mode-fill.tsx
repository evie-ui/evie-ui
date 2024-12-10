import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDeveloperModeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m262-480 96 96q11 11 11 25.5T358-333q-11 11-25.5 11T307-333L194-446q-14-14-14-34t14-34l113-113q11-11 25.5-11t25.5 11q11 11 11 25.5T358-576zm-85 208h94v71h418v-71h94v161q0 39-27.5 66.5T689-17H271q-39 0-66.5-27.5T177-111zm94-428h-94v-149q0-39 27.5-66.5T271-943h418q39 0 66.5 27.5T783-849v149h-94v-59H271zm427 220-96-96q-11-11-11-25.5t11-25.5q11-11 25.5-11t25.5 11l113 113q14 14 14 34t-14 34L653-333q-11 11-25.5 11T602-333q-11-11-11-25.5t11-25.5z" />
  </Svg>
);
