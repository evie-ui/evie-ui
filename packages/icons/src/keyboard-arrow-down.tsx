import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgKeyboardArrowDown = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-339q-9 0-18-4t-16-11L249-551q-14-14-13.5-33.5T250-618q14-14 33.5-14t33.5 14l163 164 164-164q14-14 33-13.5t33 14.5q14 14 14 33.5T710-550L514-354q-7 7-16 11t-18 4" />
  </Svg>
);
