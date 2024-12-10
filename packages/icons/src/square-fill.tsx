import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSquareFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-40.05 0-67.025-26.975Q95-148.95 95-189v-582q0-40.463 26.975-67.731Q148.95-866 189-866h582q40.463 0 67.731 27.269Q866-811.463 866-771v582q0 40.05-27.269 67.025Q811.463-95 771-95z" />
  </Svg>
);
