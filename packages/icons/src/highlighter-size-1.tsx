import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHighlighterSize1 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m256-200-56-56q-14-14-14-33.5t14-33.5l437-437q14-14 33.5-14t33.5 14l56 56q14 14 14 33.5T760-637L322-200q-14 14-33 14t-33-14" />
  </Svg>
);
