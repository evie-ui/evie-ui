import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShoppingmode = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M511-73q-28 28-67.5 28T376-73L73-376q-30-30-29.5-69.5T73-514l374-373q15-15 32-21.5t36-6.5h304q41 0 68 27t27 68v304q0 19-6.5 36T886-448zm203-591q21 0 36.5-15.5T766-716q0-21-15.5-36.5T714-768q-21 0-36.5 15.5T662-716q0 21 15.5 36.5T714-664M442-140l377-376v-304H515L138-444zm377-680" />
  </Svg>
);
