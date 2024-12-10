import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEMobiledataBadgeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm417-179q15.15 0 25.575-10Q642-294 642-310t-10-26q-10-10-26.313-10H390v-98h176q15.15 0 25.575-10Q602-464 602-480t-10-26q-10-10-26.384-10H390v-98h216q15.15 0 25.575-10Q642-634 642-650t-10-26q-10-10-26.397-10H365q-20 0-33.5 13.5T318-639v318q0 20 13.5 33.5T365-274z" />
  </Svg>
);
