import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFiberManualRecord = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.869-175q-127.253 0-216.061-88.747Q175-352.495 175-479.747 175-607 263.747-696.5q88.748-89.5 216-89.5Q607-786 696.5-696.561q89.5 89.44 89.5 216.692 0 127.253-89.439 216.061Q607.121-175 479.869-175m.117-94Q569-269 630-329.986q61-60.986 61-150Q691-569 630.014-630q-60.986-61-150-61Q391-691 330-630.014q-61 60.986-61 150Q269-391 329.986-330q60.986 61 150 61" />
  </Svg>
);
