import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBookmarkFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-212-174 74q-47 20-89-8.106-42-28.105-42-78.894v-551q0-39.463 27.475-67.231Q229.95-871 269-871h422q39.463 0 67.231 27.769Q786-815.463 786-776v551q0 50.789-42.5 78.894Q701-118 654-138z" />
  </Svg>
);
