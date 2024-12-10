import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCheckBoxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m417-430-79-79q-14-13-31.5-13t-31 14Q262-494 262-476.5t13 30.5l108 110q14.091 14 33.545 14Q436-322 451-336l235-238q14-13 13.5-30.611T686-636q-13.778-13-31.389-13Q637-649 623-636zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);