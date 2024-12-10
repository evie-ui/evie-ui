import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowDropDownFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M455.196-360.804 279.882-535.118Q276-539 274-543.127q-2-4.127-2-8.557Q272-562 278.8-569q6.8-7 17.2-7h368q10.4 0 17.2 7.136 6.8 7.137 6.8 17.319Q688-549 680-535L504.8-360.8q-4.8 4.8-11.453 7.3-6.654 2.5-13.438 2.5-6.784 0-13.347-2.5-6.562-2.5-11.366-7.304" />
  </Svg>
);
