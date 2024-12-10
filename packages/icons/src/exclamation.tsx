import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgExclamation = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.825-369Q460-369 446.5-382.625 433-396.25 433-416v-320q0-19.75 13.675-33.375Q460.351-783 480.175-783 500-783 513.5-769.375 527-755.75 527-736v320q0 19.75-13.675 33.375Q499.649-369 479.825-369m0 192Q460-177 446.5-190.675q-13.5-13.676-13.5-33.5Q433-244 446.675-257.5q13.676-13.5 33.5-13.5Q500-271 513.5-257.325q13.5 13.676 13.5 33.5Q527-204 513.325-190.5q-13.676 13.5-33.5 13.5" />
  </Svg>
);
