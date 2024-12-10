import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEastFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M727-433H103q-21 0-34.5-13.5T55-480q0-20 13.5-33.5T103-527h623L566-686q-14-14-14-33.5t14-33.5q14-14 33.5-13.5T633-752l239 239q7 7 10.5 15.5T886-479q0 9-3.5 17.5T872-446L633-207q-14 14-33.5 14.5T566-207q-14-14-14-33t14-33z" />
  </Svg>
);
