import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHighlighterSize3 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M298-158 157-299q-14-14-14-33t14-33l437-438q14-14 33.5-14.5T661-803l141 142q14 14 14 33t-14 33L365-158q-14 14-33.5 14T298-158" />
  </Svg>
);
