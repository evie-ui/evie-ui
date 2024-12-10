import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCrop32Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-215q-39.05 0-66.525-27.475Q95-269.95 95-309v-342q0-39.463 27.475-67.231Q149.95-746 189-746h582q39.463 0 67.231 27.769Q866-690.463 866-651v342q0 39.05-27.769 66.525Q810.463-215 771-215z" />
  </Svg>
);
