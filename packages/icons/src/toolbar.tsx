import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgToolbar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-543h582v-133H189zm582 95H189v354h582zm-582-95v95zm0 0v-133zm0 95v354z" />
  </Svg>
);
