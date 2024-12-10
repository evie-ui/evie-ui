import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCrop75 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-175q-39.05 0-66.525-27.475Q95-229.95 95-269v-422q0-38.463 27.475-66.731Q149.95-786 189-786h582q39.463 0 67.231 28.269Q866-729.463 866-691v422q0 39.05-27.769 66.525Q810.463-175 771-175zm0-94h582v-422H189zm0 0v-422z" />
  </Svg>
);
