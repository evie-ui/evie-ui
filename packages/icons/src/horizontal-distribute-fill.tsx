import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHorizontalDistributeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M101.825-55Q82-55 68.5-68.625 55-82.25 55-102v-756q0-19.75 13.675-33.375Q82.351-905 102.175-905 122-905 135.5-891.375 149-877.75 149-858v756q0 19.75-13.675 33.375Q121.649-55 101.825-55m378.057-208q-28.382 0-47.632-19.333Q413-301.667 413-330v-300q0-28.333 19.368-47.667Q451.735-697 480.118-697q28.382 0 47.632 19.333Q547-658.333 547-630v300q0 28.333-19.368 47.667Q508.265-263 479.882-263M857.737-55Q838-55 824.5-68.625 811-82.25 811-102v-756q0-19.625 13.675-33.812Q838.351-906 858.088-906q19.737 0 33.824 14.188Q906-877.625 906-858v756q0 19.75-14.263 33.375t-34 13.625" />
  </Svg>
);
