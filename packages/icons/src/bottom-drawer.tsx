import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBottomDrawer = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-365q17-16 38-23t46-7h413.701q25.299 0 46.799 7t37.5 23v-311H189zm0 271h582v-123q0-33.65-24.675-58.825Q721.65-396 687-396H273.457q-35.107 0-59.782 25.175Q189-345.65 189-312zm0 0h582z" />
  </Svg>
);