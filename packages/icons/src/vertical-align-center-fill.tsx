import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVerticalAlignCenterFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m433-200-37 37q-13.556 14-32.278 14T330-165q-14-14-14-34.222T330-233l116-116q7-7 16.133-11 9.134-4 18-4Q489-364 498-360t16 11l116 116q14 13.556 14 34.278T628-163q-14 14-32.222 14T564-163l-37-37v133q0 19.75-13.675 33.375Q499.649-20 479.825-20 460-20 446.5-33.625 433-47.25 433-67zM182-433q-19.75 0-33.375-13.675Q135-460.351 135-480.175 135-500 148.625-513.5 162.25-527 182-527h596q19.75 0 33.875 13.675Q826-499.649 826-479.825 826-460 811.875-446.5 797.75-433 778-433zm251-328v-132q0-19.75 13.675-33.375Q460.351-940 480.175-940 500-940 513.5-926.375 527-912.75 527-893v132l37-37q13.556-13 32.278-13T630-795q14 14 14 34.222T630-727L514-611q-7 7-16.133 11-9.134 4-18 4Q471-596 462-600t-16-11L330-727q-14-13.556-14-34.278T332-798q14-13 32.222-13T396-798z" />
  </Svg>
);
