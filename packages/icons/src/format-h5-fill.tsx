import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatH5Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M143.825-258Q124-258 110.5-271.625 97-285.25 97-306v-349q0-19.75 13.675-33.375Q124.351-702 144.175-702q20.25 0 34.037 13.625Q192-674.75 192-655v128h136.263v-128q0-19.75 13.622-33.375Q355.508-702 375.254-702 395-702 409-688.375 423-674.75 423-655v349q0 20.75-13.963 34.375T374.825-258q-19.74 0-33.182-13.625Q328.2-285.25 328.2-306v-127H192v127q0 20.75-13.963 34.375T143.825-258M590-258q-19.75 0-33.375-13.675Q543-285.351 543-306.175 543-326 556.625-339.5 570.25-353 590-353h184v-80H590q-19.75 0-33.375-13.625T543-480v-175q0-19.75 13.625-33.375T590-702h231q19.75 0 33.375 13.675Q868-674.649 868-654.825 868-634 854.162-620.5 840.325-607 821-607H637v80h137q38.75 0 66.375 27.625T868-433v80q0 39.75-27.625 67.375T774-258z" />
  </Svg>
);
