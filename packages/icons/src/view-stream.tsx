import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewStream = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M771-269v-164H189v164zm0-258v-164H189v164zM189-175q-39.05 0-66.525-27.475Q95-229.95 95-269v-422q0-39.463 27.475-67.231Q149.95-786 189-786h582q39.463 0 67.231 27.769Q866-730.463 866-691v422q0 39.05-27.769 66.525Q810.463-175 771-175z" />
  </Svg>
);
