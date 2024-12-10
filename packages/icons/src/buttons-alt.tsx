import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgButtonsAlt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-215q-39.05 0-66.525-27.475Q55-269.95 55-309v-342q0-39.463 27.475-67.231Q109.95-746 149-746h662q39.463 0 67.231 27.769Q906-690.463 906-651v342q0 39.05-27.769 66.525Q850.463-215 811-215zm0-94h662v-342H149zm132-140v61q0 13 8.79 21.5t22.233 8.5q13.444 0 21.71-8.783Q342-375.567 342-389v-60h60q13.433 0 22.217-8.79Q433-466.58 433-480.023q0-13.444-8.783-22.21Q415.433-511 402-511h-60v-61q0-13-8.174-21.5-8.173-8.5-21.617-8.5-13.443 0-22.326 8.2Q281-585.6 281-572v61h-60q-13.433 0-22.217 8.79Q190-493.42 190-479.977q0 13.444 8.783 22.21Q207.567-449 221-449zM149-309v-342z" />
  </Svg>
);
