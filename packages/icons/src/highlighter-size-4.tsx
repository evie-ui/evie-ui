import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHighlighterSize4 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M341-115 115-341q-14-14-14-33.5t14-33.5l437-437q14-14 33-14t33 14l227 226q14 14 14 33.5T845-552L408-115q-14 14-33.5 14T341-115" />
  </Svg>
);
