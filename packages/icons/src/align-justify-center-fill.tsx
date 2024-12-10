import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlignJustifyCenterFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.825-55Q460-55 446.5-68.625 433-82.25 433-102v-756q0-19.75 13.675-33.875Q460.351-906 480.175-906 500-906 513.5-891.875 527-877.75 527-858v756q0 19.75-13.675 33.375Q499.649-55 479.825-55M605-273q-20.75 0-34.375-13.625T557-320v-320q0-19.75 13.625-33.375T605-687h40q19.75 0 33.375 13.625T692-640v320q0 19.75-13.625 33.375T645-273zm-289 0q-20.75 0-34.375-13.625T268-320v-320q0-19.75 13.625-33.375T316-687h40q19.75 0 33.375 13.625T403-640v320q0 19.75-13.625 33.375T356-273z" />
  </Svg>
);
