import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgChatInfoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.491-671q18.902 0 31.705-12.295Q524-695.59 524-714.491q0-18.527-12.786-32.018T479.526-760q-18.901 0-31.214 13.474-12.312 13.473-12.312 32Q436-696 448.295-683.5t31.196 12.5m.684 305q16.225 0 26.025-9.925 9.8-9.925 9.8-26.267V-587q0-15.3-9.975-25.65-9.976-10.35-26.2-10.35-16.225 0-26.025 10.35Q444-602.3 444-587v184.808q0 16.342 9.975 26.267 9.976 9.925 26.2 9.925M215-215l-79 79q-23 23-52 10.969T55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v502q0 39.05-27.769 66.525Q850.463-215 811-215z" />
  </Svg>
);
