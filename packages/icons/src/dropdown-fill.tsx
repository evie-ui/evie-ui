import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDropdownFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M509-462h156q20 0 33.5-13.5T712-509v-156q0-20-13.5-33.5T665-712H509q-20 0-33.5 13.5T462-665v156q0 20 13.5 33.5T509-462M189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h582q39 0 67 28t28 67v582q0 39-28 66.5T771-95z" />
  </Svg>
);
