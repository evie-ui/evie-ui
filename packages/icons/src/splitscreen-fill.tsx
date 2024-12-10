import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSplitscreenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-506q-39.05 0-66.525-27.475Q135-560.95 135-600v-211q0-39.463 27.475-67.231Q189.95-906 229-906h502q39.463 0 67.231 27.769Q826-850.463 826-811v211q0 39.05-27.769 66.525Q770.463-506 731-506zm0 451q-39.05 0-66.525-27.475Q135-109.95 135-149v-211q0-39.462 27.475-67.231Q189.95-455 229-455h502q39.463 0 67.231 27.769Q826-399.462 826-360v211q0 39.05-27.769 66.525Q770.463-55 731-55z" />
  </Svg>
);
