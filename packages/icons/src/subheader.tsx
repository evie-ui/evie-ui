import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSubheader = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582zm107 220h229q24.083 0 40.042-16.677Q581-584.353 581-608.176 581-632 565.042-648 549.083-664 525-664H295q-24.083 0-40.042 15.941Q239-632.118 239-608.294q0 23.823 16.625 40.559Q272.25-551 296-551" />
  </Svg>
);
