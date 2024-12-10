import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const Svg1KFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m543-450 77 82q2 2 17 8 16 0 22.5-15t-4.5-26l-74-79 74-80q11-11 4.5-25.5T637-600q-5 0-9 2t-8 6l-77 82v-65q0-11-7-18t-18-7q-11 0-18 7t-7 18v190q0 11 7 18t18 7q11 0 18-7t7-18zM336-550v165q0 11 7 18t18 7q11 0 18-7t7-18v-190q0-11-7-18t-18-7h-63q-11 0-18 7t-7 18q0 11 7 18t18 7zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
