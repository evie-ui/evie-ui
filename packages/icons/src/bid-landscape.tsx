import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBidLandscape = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-195v101h582v-328L565-314q-14 15-33 15.5T499-313L355-456zm0-101 133-132q14.455-14 33.727-14Q375-537 389-523l143 143 239-239v-152H189zm0-126v-102 239-177 267-166 177zm0 126v-380 391-177zm0 101v-166 177-238 328z" />
  </Svg>
);
