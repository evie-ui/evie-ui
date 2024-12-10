import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRipples = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-189h582v-343q-20 10-41.492 14.5Q708.016-513 686-513q-73.175 0-124.088-50.912Q511-614.825 511-688q0-21.339 4.5-42.169Q520-751 530-771H189zm0 94q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-676v582z" />
  </Svg>
);
