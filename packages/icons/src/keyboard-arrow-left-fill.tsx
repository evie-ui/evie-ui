import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgKeyboardArrowLeftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m430-481 165 165q14 14 13.5 33T594-250q-14 14-33.5 14T527-250L330-447q-7-7-11-16t-4-18q0-9 4-18t11-16l198-198q14-14 33.5-14t33.5 14q14 14 14 33.5T595-646z" />
  </Svg>
);
