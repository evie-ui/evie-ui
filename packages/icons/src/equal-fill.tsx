import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEqualFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M202-273q-27.917 0-47.458-19.576Q135-312.152 135-340.118q0-27.965 19.542-47.424Q174.083-407 202-407h556q28.333 0 48.167 19.576Q826-367.848 826-339.882q0 27.965-19.833 47.424Q786.333-273 758-273zm0-280q-27.917 0-47.458-19.576Q135-592.152 135-620.118q0-27.965 19.542-47.424Q174.083-687 202-687h556q28.333 0 48.167 19.576Q826-647.848 826-619.882q0 27.965-19.833 47.424Q786.333-553 758-553z" />
  </Svg>
);
