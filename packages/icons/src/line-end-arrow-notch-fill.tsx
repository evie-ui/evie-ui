import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLineEndArrowNotchFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M496-219q-15 11-28.5-.5T461-248l100-185H120q-20 0-33.5-13.5T73-480q0-20 13.5-33.5T120-527h441L461-713q-7-16 6.5-27.5T496-742l349 223q22 14 22 39t-22 39z" />
  </Svg>
);
