import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHighlighterSize5 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M398-58 58-398q-14-14-14-33t14-33l438-438q13-13 32.5-13t33.5 14l340 339q14 14 14 33t-14 33L464-58q-14 14-33 14t-33-14" />
  </Svg>
);
