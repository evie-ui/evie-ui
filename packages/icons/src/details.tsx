import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDetails = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M115-95q-28 0-41-23.5t0-47.5l365-656q13-25 41-25t41 25l366 656q12 24-1 47.5T846-95zm80-94h238v-428zm332 0h238L527-617z" />
  </Svg>
);
