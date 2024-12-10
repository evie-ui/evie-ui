import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestMultiRoom = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M145-105v-503l335-251 335 251.333V-105zm95-95h280v-121H240zm360 0h121v-121H600zM240-400h120v-121H240zm200 0h281v-121H440zM293-600h374L480-739z" />
  </Svg>
);
