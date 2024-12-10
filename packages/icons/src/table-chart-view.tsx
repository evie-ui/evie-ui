import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTableChartView = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M256.087-95.913Q241-111 241-129.5q0-18.5 15-33.5l194-193q28-28 66.5-28t66.5 28l73 73 183-182q14.364-14 33.182-13.5T905-464.158q14 13.842 14 32.967 0 19.124-14 33.191L722-216q-27.8 28-66.4 28-38.6 0-66.6-28l-73-73L322-95q-15 14-33.5 13.5t-32.413-14.413M149-95q-39 0-66.5-27.475T55-189v-602q0-39.463 27.475-67.231Q109.95-886 149-886h582q39.463 0 67.231 27.769Q826-830.463 826-791v180q0 19.75-14.188 33.375Q797.625-564 778-564H149zm0-556h582v-140H149zm0 0v-140z" />
  </Svg>
);
