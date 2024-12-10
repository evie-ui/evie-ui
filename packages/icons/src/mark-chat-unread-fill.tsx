import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMarkChatUnreadFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M760.118-704Q711-704 677-738.417 643-772.833 643-822q0-48 34.177-82.5 34.176-34.5 82.999-34.5Q809-939 843.5-904.5t34.5 83q0 48.5-34.382 83-34.383 34.5-83.5 34.5M215-215l-79 79q-23 23-52 11.312Q55-136.375 55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h432q-11 22-16 46.5t-2 48.5q5 78 61.698 132T760-625q42 0 79.5-16t66.5-48v380q0 39.05-27.769 66.525Q850.463-215 811-215z" />
  </Svg>
);
