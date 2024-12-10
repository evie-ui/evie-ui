import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTrendingFlatFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M725-432H142q-20 0-33.5-13.5T95-479q0-20 13.5-33.5T142-526h584l-67-67q-15-14-15-33.5t14-33.5q14-15 33.5-14t33.5 15l148 147q13 14 13 33t-13 33L725-299q-14 15-33 15t-33-14q-15-14-15-34t15-34z" />
  </Svg>
);
