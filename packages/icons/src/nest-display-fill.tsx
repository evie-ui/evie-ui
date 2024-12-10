import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestDisplayFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-160q-120 0-188.5-15T223-218v-34h-82q-42 0-70-30t-25-71l29-348q3-38 29.5-63t63.5-25h624q37 0 63.5 25t29.5 63l29 348q3 41-25 71t-69 30h-83v34q0 28-68.5 43T480-160" />
  </Svg>
);
