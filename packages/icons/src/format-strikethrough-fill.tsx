import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFormatStrikethroughFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M84.608-403q-12.358 0-20.983-8.963T55-434.175Q55-447 63.655-455.5q8.656-8.5 21.45-8.5H876q11.75 0 20.875 8.675 9.125 8.676 9.125 21.5Q906-421 897.088-412q-8.913 9-22.088 9zM413-524v-168H241q-28.333 0-47.167-19.576Q175-731.152 175-759.118 175-787 193.833-806.5 212.667-826 241-826h478q27.833 0 47.417 19.618Q786-786.765 786-758.882 786-731 766.417-711.5 746.833-692 719-692H548v168zm0 181h135v141q0 27.917-19.679 47.458Q508.642-135 480.529-135 452-135 432.5-154.833 413-174.667 413-203z" />
  </Svg>
);
