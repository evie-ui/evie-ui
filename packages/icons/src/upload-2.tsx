import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgUpload2 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-149h596q19.75 0 33.875 13.675Q826-121.649 826-101.825 826-82 811.875-68.5 797.75-55 778-55H182q-19.75 0-33.375-13.675Q135-82.351 135-102.175 135-122 148.625-135.5 162.25-149 182-149m191-100q-19.75 0-33.375-13.625T326-296v-188h-85q-30 0-42-26t7-50l237-301q8-9 17.712-12.5Q470.423-877 480-877t19.288 3.5Q509-870 517-861l237 301q18 24 6 50t-42 26h-83v188q0 19.75-14.125 33.375T587-249zm47-95h120v-251h68L480-751 352-595h68zm60-251" />
  </Svg>
);
