import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVariables = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-302v-356q0-19.625 13.625-33.812Q122.25-706 142-706h676q19.625 0 33.812 14.188Q866-677.625 866-658v356q0 19.75-14.188 33.375Q837.625-255 818-255H142q-19.75 0-33.375-13.625T95-302m94-47h582v-262H189zm0 0v-262z" />
  </Svg>
);
