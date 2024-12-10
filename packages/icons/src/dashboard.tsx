import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDashboard = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M504-628v-210q0-19.75 13.625-33.375T551-885h287q19.75 0 33.375 13.625T885-838v210q0 19.75-13.625 33.375T838-581H551q-19.75 0-33.375-13.625T504-628M75-478v-360q0-19.75 13.625-33.375T122-885h287q19.75 0 33.375 13.625T456-838v360q0 19.75-13.625 33.375T409-431H122q-19.75 0-33.375-13.625T75-478m429 353v-360q0-19.75 13.625-33.375T551-532h287q19.75 0 33.375 13.625T885-485v360q0 20.75-13.625 34.375T838-77H551q-19.75 0-33.375-13.625T504-125m-429 0v-210q0-19.75 13.625-33.375T122-382h287q19.75 0 33.375 13.625T456-335v210q0 20.75-13.625 34.375T409-77H122q-19.75 0-33.375-13.625T75-125m95-400h192v-266H170zm429 353h192v-265H599zm0-503h192v-116H599zM170-172h192v-115H170zm192-115" />
  </Svg>
);