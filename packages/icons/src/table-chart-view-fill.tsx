import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTableChartViewFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M256.087-95.913Q241-111 241-129.5q0-18.5 15-33.5l194-193q28-28 66.5-28t66.5 28l73 73 182-181q14.364-14 33.182-13.5T904-463q14 14 14 32.8 0 18.8-14 33.2L722-216q-27.678 28-66.339 28T589-216l-73-73L322-95q-15 14-33.5 13.5t-32.413-14.413M149-95q-39 0-66.5-27.475T55-189v-602q0-39.463 27.475-67.231Q109.95-886 149-886h582q39.463 0 67.231 27.769Q826-830.463 826-791v180q0 20-14.062 33.5Q797.875-564 778-564H149z" />
  </Svg>
);
