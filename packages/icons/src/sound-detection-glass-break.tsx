import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSoundDetectionGlassBreak = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-95v-771h771v771zm94-676v375l190-190 158 157 234-261v-81zm0 582h582v-359L542-291 380-453 189-261z" />
  </Svg>
);
