import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlignJustifyFlexEndFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M857.825-55Q838-55 824.5-68.625 811-82.25 811-102v-756q0-19.75 13.675-33.875Q838.351-906 858.175-906 878-906 892-891.875 906-877.75 906-858v756q0 19.75-14.175 33.375Q877.649-55 857.825-55M600-273q-19.75 0-33.375-13.625T553-320v-320q0-19.75 13.625-33.375T600-687h40q19.75 0 33.375 13.625T687-640v320q0 19.75-13.625 33.375T640-273zm-240 0q-19.75 0-33.375-13.625T313-320v-320q0-19.75 13.625-33.375T360-687h40q19.75 0 33.375 13.625T447-640v320q0 19.75-13.625 33.375T400-273z" />
  </Svg>
);
