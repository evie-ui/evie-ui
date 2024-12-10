import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgToast = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M279.235-249h401.53q12.985 0 21.61-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325t-21.61-8.5h-401.53q-12.985 0-21.61 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325t21.61 8.5M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
