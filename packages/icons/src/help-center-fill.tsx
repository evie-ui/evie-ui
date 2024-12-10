import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHelpCenterFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M473.5-246q18.5 0 32.5-14t14-32.5q0-18.5-13.92-32T473-338q-18 0-31.5 13.42T428-292q0 18 13.5 32t32 14M603-598.808q0-54.63-34.5-86.911T476-718q-41 0-75.5 18.5T343-646q-8 12-2 26t21 20q13 5 27.5 1t25.5-16q12-15 26.578-21.5 14.579-6.5 33.396-6.5 24.678 0 39.352 13Q529-617 529-593.634q0 15.07-9.5 30.758Q510-547.188 491-527q-32 31-42.933 51-10.934 20-14.067 48-1 14.243 9.686 24.122Q454.371-394 469-394q14 0 24-9.5t15-26q5-14.5 15.5-29t27.534-30.879Q577-516 590-542.5q13-26.5 13-56.308M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
