import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const Svg1K = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m543-450 77.968 82q2.032 2 15.955 8Q652-360 658.5-374q6.5-14-3.5-26.261l-74-79.36L655-561q10-10.696 4-24.848T637-600q-4.789 0-8.52 2-3.73 2-7.48 6l-77.504 82v-65q0-10.833-7.187-17.917Q529.123-600 518.132-600t-18.062 7.083Q493-585.833 493-575v190q0 10.833 7.116 17.917 7.117 7.083 18 7.083Q529-360 536-367.083q7-7.084 7-17.917zM336-550v165q0 10.833 7.116 17.917 7.117 7.083 18 7.083Q372-360 379-367.083q7-7.084 7-17.917v-190q0-10.833-7.083-17.917Q371.833-600 361-600h-63q-10.833 0-17.917 7.116-7.083 7.117-7.083 18Q273-564 280.083-557q7.084 7 17.917 7zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
