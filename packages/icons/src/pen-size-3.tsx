import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPenSize3 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M206-205.943Q187-226 187-253.261T206-300l453-454q20-19 47.321-19.557 27.322-.557 47.5 19.5Q773-735 773-707.239T754-660L300-206q-19.478 19.111-47.239 19.056Q225-187 206-205.943" />
  </Svg>
);
