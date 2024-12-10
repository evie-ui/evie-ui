import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAzmFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M630-583v278q0 15 15 21t26-5l116-116q13-13 20.5-31t7.5-37v-248q0-39-27.5-66.5T721-815H473q-19 0-37 7.5T405-787L289-671q-11 11-5 26t21 15h278q20 0 33.5 13.5T630-583M385-338v278q0 15 15 21t26-5l116-116q13-13 20.5-31t7.5-37v-248q0-39-27.5-66.5T476-570H228q-19 0-37 7.5T160-542L44-426q-11 11-5 26t21 15h278q20 0 33.5 13.5T385-338" />
  </Svg>
);
