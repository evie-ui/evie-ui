import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStatMinus1Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-353q-9 0-18-4t-16-11L249-565q-14-14-14-33t14-33q14-14 33-14t33 14l165 166 165-166q14-14 33-13.5t33 13.5q14 14 14 33t-14 33L514-368q-7 7-16 11t-18 4" />
  </Svg>
);
