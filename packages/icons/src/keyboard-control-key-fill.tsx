import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgKeyboardControlKeyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-651 275-447q-14 14-33 14t-33-14q-14-14-14-33t14-33l237-237q14-14 34-14t34 14l237 237q14 14 14 33t-14 33q-14 14-33 14t-33-14z" />
  </Svg>
);
