import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLineStartArrowNotchFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m399-433 100 185q7 17-6.5 28.5t-28.5.5L116-441q-23-14-23-39t23-39l348-223q15-10 28.5 1.5T499-713L399-527h441q20 0 33.5 13.5T887-480q0 20-13.5 33.5T840-433z" />
  </Svg>
);
