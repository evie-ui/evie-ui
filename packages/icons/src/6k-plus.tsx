import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const Svg6KPlus = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M273-360h100q14.45 0 24.225-9.487Q407-378.975 407-393v-70q0-14.025-9.775-23.513Q387.45-496 373-496h-83v-54h92q9.833 0 17.417-7.116 7.583-7.117 7.583-18Q407-586 399.417-593q-7.584-7-17.417-7H273q-15.025 0-24.012 9.775Q240-580.45 240-566v173q0 14.025 8.988 23.513Q257.975-360 273-360m17-33v-70h67v70zm231-57 77 82q2 2 16.462 8Q630-360 636-374t-3-26.261l-74-79.36L633-561q9-10.696 2.971-24.848Q629.941-600 615-600q-5.789 0-9.442 2-3.652 2-7.35 6l-76.712 82v-65q0-10.833-7.687-17.917Q506.123-600 495.632-600t-17.562 7.083Q471-585.833 471-575v190q0 10.833 7.116 17.917 7.117 7.083 17.5 7.083 10.384 0 17.884-7.083Q521-374.167 521-385zm159-13v42.5q0 8.5 5.5 14.5t14 6q8.5 0 14.5-6t6-14.5V-463h35q7 0 11.5-5.143t4.5-12q0-6.857-4.5-11.357Q762-496 755-496h-35v-44q0-8-6-14t-14-6q-9 0-14.5 6t-5.5 14v44h-47q-7 0-11.5 4.5t-4.5 11.357q0 6.857 5.1 12T634-463zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
