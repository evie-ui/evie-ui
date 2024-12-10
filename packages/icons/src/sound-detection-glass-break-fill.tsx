import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSoundDetectionGlassBreakFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-301v-565h771v71L537-429 379-586zm0 206v-71l285-287 162 162 324-363v559z" />
  </Svg>
);
