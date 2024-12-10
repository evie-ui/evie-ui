import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCompareFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M411-95H189q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h222v-42q0-14.875 10.37-24.938Q431.74-943 447.07-943q14.905 0 24.917 10.35Q482-922.3 482-907v855q0 14.875-10.088 24.938Q461.825-17 446.912-17 432-17 421.5-27.35 411-37.7 411-53zM188-231h223v-255zM553-95v-387l218 249v-538H553v-95h218q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
