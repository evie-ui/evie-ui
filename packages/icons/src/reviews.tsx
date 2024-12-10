import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgReviews = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-454 70 43q13 8 25.5-1.5T585-438l-19-78 61-53q12-10 7-25t-20-16l-80.903-6.427L502-691q-6.129-14-22.065-14Q464-705 458-691l-31.097 74.573L346-610q-15 1-20 16t7 25l61 53-18 78q-4 16 8.5 25.5T410-411zM215-215l-79 79q-23 23-52 10.969T55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v502q0 39.05-27.769 66.525Q850.463-215 811-215zm-26-94h622v-502H149v548zm-40 0v-502z" />
  </Svg>
);
