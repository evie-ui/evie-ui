import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgChartDataFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m418-455 59 59q8 8 20.5 8t21.5-8l131-131v48q0 12 8.5 20.5T680-450q12 0 21-8.5t9-21.5v-120q0-12-9-21t-21-9H559q-12 0-20.5 9t-8.5 21q0 13 8.5 21.5T560-570h47L498-460l-59-59q-9-9-21.5-9t-20.5 9L275-397q-9 9-9 21.5t9 20.5q9 9 21.5 9t20.5-9zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
