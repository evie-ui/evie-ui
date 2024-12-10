import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgGate = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M27-250v-460h83v460zm143 89v-463q0-72.025 51.637-123.513Q273.275-799 346-799h269q72.025 0 123.513 51.487Q790-696.025 790-624v463zm680-89v-460h83v460zm-597 6h186v-195h-90v-82h90v-195h-93q-39 0-66 27t-27 65zm268 0h186v-380q0-38-27-65t-65-27h-94v195h90v82h-90z" />
  </Svg>
);
