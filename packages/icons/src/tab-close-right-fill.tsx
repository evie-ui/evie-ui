import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTabCloseRightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M798-116H671q-17 0-28.5-11T631-155q0-17 11.5-28.5T671-195h127l-35-37q-11-11-11.5-27t11.5-28q12-12 27.5-12t27.5 12l98 98q14 14 14 33.5T916-122l-98 98q-12 12-27.5 12T763-24q-12-11-12-27t11-28zM189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h582q39 0 67 28t28 67v408q-20-7-39-10.5t-38-3.5q-33 0-63 9.5T671-340L530-480l90-89q10-11 10.5-25T620-620q-12-11-25.5-11T569-620l-89 90-89-90q-11-10-24.5-10.5T341-620q-11 12-11 25.5t11 25.5l89 89-89 89q-11 11-11 24.5t11 25.5q12 11 25.5 11t25.5-11l88-89 137 137q-3 3-25.5 53.5T569-152q1 15 3.5 29t5.5 28z" />
  </Svg>
);
