import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgOpacityFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.77-95Q337-95 236-192.5T135-432.742q0-71.903 27-134.581Q189-630 238-677l192-190q10-11 23.5-16t26.5-5q13 0 26.5 5t23.5 16l192 190q49.064 46.633 76.532 109.377Q826-504.879 826-432.898 826-290 724.27-192.5 622.541-95 479.77-95M232-400h498q8-65-14-118.5T666-599L480-782 294-599q-28 27-49.5 80.5T232-400" />
  </Svg>
);
