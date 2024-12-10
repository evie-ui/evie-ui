import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTableChart = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M811-96H189q-39.05 0-66.525-27.475Q95-150.95 95-190v-581q0-39.463 27.475-67.231Q149.95-866 189-866h622q39.463 0 67.231 27.769Q906-810.463 906-771v581q0 39.05-27.769 66.525Q850.463-96 811-96M189-637h622v-134H189zm145 60H189v387h145zm332 0v387h145v-387zm-60 0H394v387h212z" />
  </Svg>
);
