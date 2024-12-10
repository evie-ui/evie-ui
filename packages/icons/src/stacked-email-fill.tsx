import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStackedEmailFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M530-488q12 9 27 9t28-9l264-214v-72L557-545 266-774v72zM111-92q-39 0-66.5-28T17-186v-500q0-20 13.5-33.5T64-733q20 0 33.5 13.5T111-686v500h673q20 0 33.5 13.5T831-139q0 20-13.5 33.5T784-92zm155-154q-39 0-67-28t-28-67v-433q0-39 28-67t67-28h583q39 0 66.5 28t27.5 67v433q0 39-27.5 67T849-246z" />
  </Svg>
);