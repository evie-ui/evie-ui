import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWaterFullFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M220-631q51-28 108.5-43T443-690q32 0 63 4.5t60 11.5q52 15 78.5 19.5T701-650h42l17-161H200zm54 576q-36 0-63.5-24T180-138l-73-651q-5-47 26.5-82t78.5-35h536q47 0 78.5 35t26.5 82l-72 651q-4 35-31 59t-63 24z" />
  </Svg>
);