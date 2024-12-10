import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSell = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M583-73q-28 28-67.5 28T448-73L73-448q-15-15-21-32t-6-36v-304q0-40 27-67.5t67-27.5h304q19 0 37 6.5t33 21.5l373 372q29 29 29 69t-29 69zm-64-65 304-304-379-378H140v304zM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664M140-820" />
  </Svg>
);
