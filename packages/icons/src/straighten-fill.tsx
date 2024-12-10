import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStraightenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M151-221q-39.05 0-66.525-27.769Q57-276.538 57-316v-328q0-38.463 27.475-66.731Q111.95-739 151-739h119v229.47q0 12.53 8.5 21.03Q287-480 300-480t21.5-8.5q8.5-8.5 8.5-21.03V-739h120v229q0 13 8.5 21.5T480-480q13 0 21.5-8.5T510-510v-229h120v229q0 13 8.5 21.5T660-480q13 0 21.5-8.5T690-510v-229h119q39.05 0 66.525 28.269Q903-682.463 903-644v328q0 39.462-27.475 67.231Q848.05-221 809-221z" />
  </Svg>
);
