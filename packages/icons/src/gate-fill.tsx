import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGateFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M170-161v-463q0-72.025 51.637-123.513Q273.275-799 346-799h93v278h-90v82h90v278zm351 0v-278h90v-82h-90v-278h94q72.025 0 123.513 51.487Q790-696.025 790-624v463zM27-250v-460h83v460zm823 0v-460h83v460z" />
  </Svg>
);
