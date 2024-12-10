import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCleaningFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M478-730v-34l-59.921 64.921Q415-696 392-691q-15.571 0-22.786-11.5Q362-714 369-728l34-81v-22h-28q-13 0-21.5-8.895-8.5-8.894-8.5-27Q345-882 355.425-892T381-902h228q21 0 33.5 12.85T655-856v21q0 4.75-1 10.375T651-815l-40 85zM389-34q-40.05 0-67.025-27.269Q295-88.537 295-129v-207q0-12 3-24t9-22l144-259q13-22 35.225-35.5T534-690h84q19.875 0 33.938 14.062Q666-661.875 666-642v513q0 40.463-27.269 67.731Q611.463-34 571-34z" />
  </Svg>
);
