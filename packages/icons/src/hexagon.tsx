import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHexagon = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M318-103q-24.586 0-46.58-12.375T236-150L71-433q-13-22.328-13-47.164Q58-505 71-527l165-283q13.426-22.25 35.42-34.625T318-857h325q24.207 0 45.891 12.375Q710.574-832.25 725-810l164 283q13 22.328 13 47.164Q902-455 889-433L725-150q-14.426 22.25-36.109 34.625Q667.207-103 643-103zm-2-94h328l162-283-162-283H316L153-480zm164-283" />
  </Svg>
);
