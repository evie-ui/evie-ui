import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgResumeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M193-240v-480q0-20 13.5-33.5T240-767q20 0 33.5 13.5T287-720v480q0 20-13.5 33.5T240-193q-20 0-33.5-13.5T193-240m279 4q-24 14-47.5 1T401-275v-410q0-27 23.5-40t47.5 1l339 203q23 14 23 41t-23 41z" />
  </Svg>
);
