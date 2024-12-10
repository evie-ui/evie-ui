import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLoyalty = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M583-73q-28 28-67.5 28T448-73L73-448q-15-15-21-32t-6-36v-304q0-40 27-67.5t67-27.5h304q19 0 37 6.5t33 21.5l373 372q29 29 29 69t-29 69zm-64-65 304-304-379-378H140v304zM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664m313 368 106-106q11-11 16-24.5t5-28.5q0-32-22.5-54.5T608-532q-20 0-40 13t-44 42q-24-29-44-42t-40-13q-32 0-54.5 22.5T363-455q0 15 5 28.5t16 24.5l106 106q14 14 34 14t34-14" />
  </Svg>
);
