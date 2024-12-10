import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShelfPosition = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-96q-39.05 0-66.525-27.475Q95-150.95 95-190v-581q0-39.463 27.475-67.231Q149.95-866 189-866h622q39.463 0 67.231 27.769Q906-810.463 906-771v581q0 39.05-27.769 66.525Q850.463-96 811-96zm0-228v134h622v-134zm477-60h145v-387H666zm-477 0h145v-387H189zm205 0h212v-387H394z" />
  </Svg>
);
