import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSpaceBar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-335q-39.8 0-66.9-27.1Q135-389.2 135-429v-124q0-19.75 13.675-33.375Q162.351-600 182.175-600 202-600 215.5-586.375 229-572.75 229-553v124h502v-124q0-19.75 13.675-33.375Q758.351-600 778.088-600q19.737 0 33.824 13.625Q826-572.75 826-553v124q0 39.8-27.394 66.9Q771.213-335 731-335z" />
  </Svg>
);
