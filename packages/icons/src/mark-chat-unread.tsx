import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMarkChatUnread = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m215-215-79 79q-23 23-52 10.969T55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h432q-11 22-16 46.5t-2 48.5H149v548l40-46h622v-324q27.794-6 51.897-20.5Q887-668 906-689v380q0 39.05-27.769 66.525Q850.463-215 811-215zm545.118-489Q711-704 677-738.417 643-772.833 643-822q0-48 34.177-82.5 34.176-34.5 82.999-34.5Q809-939 843.5-904.5t34.5 83q0 48.5-34.382 83-34.383 34.5-83.5 34.5M149-811v502z" />
  </Svg>
);
