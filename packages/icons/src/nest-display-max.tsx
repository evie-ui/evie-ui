import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNestDisplayMax = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.175-564q16.225 0 26.025-9.975 9.8-9.976 9.8-26.2 0-16.225-9.975-26.025-9.976-9.8-26.2-9.8-16.225 0-26.025 9.975-9.8 9.976-9.8 26.2 0 16.225 9.975 26.025 9.976 9.8 26.2 9.8M480-160q-120 0-188.5-14.826T223-218v-34h-82q-42.084 0-70.042-30T46-353l29-348q3-38 29.282-63T168-789h624q37.436 0 63.718 25Q882-739 885-701l29 348q3 41-24.928 71-27.927 30-69.072 30h-83v34q0 28.348-68.5 43.174T480-160M141-346h678l-27-348H168zm339-174" />
  </Svg>
);
