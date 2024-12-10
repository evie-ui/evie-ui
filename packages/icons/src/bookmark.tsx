import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBookmark = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-212-174 74q-47 20-89-7.939T175-225v-551q0-39.463 27.475-67.231Q229.95-871 269-871h422q39.463 0 67.231 27.769Q786-815.463 786-776v551q0 51.122-42.5 79.061Q701-118 654-138zm0-101.162L691-225v-551H269v551zM480-776H269h422z" />
  </Svg>
);
