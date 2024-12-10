import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlignJustifySpaceEven = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M600-273q-19.75 0-33.375-13.625T553-320v-320q0-19.75 13.625-33.375T600-687h40q19.75 0 33.375 13.625T687-640v320q0 19.75-13.625 33.375T640-273zm-280 0q-19.75 0-33.375-13.625T273-320v-320q0-19.75 13.625-33.375T320-687h40q19.75 0 33.375 13.625T407-640v320q0 19.75-13.625 33.375T360-273zM857.825-55Q838-55 824.5-68.625 811-82.25 811-102v-756q0-19.75 13.675-33.875Q838.351-906 858.175-906 878-906 892-891.875 906-877.75 906-858v756q0 19.75-14.175 33.375Q877.649-55 857.825-55m-756 0Q82-55 68.5-68.625 55-82.25 55-102v-756q0-19.75 13.675-33.875Q82.351-906 102.175-906 122-906 135.5-891.875 149-877.75 149-858v756q0 19.75-13.675 33.375Q121.649-55 101.825-55" />
  </Svg>
);
