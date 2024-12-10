import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgQuietTimeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M524-25q-87 0-163-33t-133-90q-57-57-90-133t-33-163q0-128 72.5-233T369-833q29-14 57 2.5t30 48.5q1 81 29.5 156.5T572-493q57 58 132.5 86.5T860-376q29 2 47.5 28t7.5 52Q869-173 762-99T524-25" />
  </Svg>
);
