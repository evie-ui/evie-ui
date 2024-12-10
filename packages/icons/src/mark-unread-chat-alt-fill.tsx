import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMarkUnreadChatAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M760-704q-49 0-83-34.5T643-822q0-48 34-82.5t83-34.5q49 0 83.5 34.5T878-822q0 49-34.5 83.5T760-704M215-215l-79 79q-23 23-52 11.5T55-168v-643q0-39 27.5-67t66.5-28h432q-11 22-16 46.5t-2 48.5q1 25 8 48t21 44H240v60h401q27 17 56.5 25.5T760-625q42 0 79.5-16t66.5-48v380q0 39-28 66.5T811-215zm25-314h480v-60H240zm0 130h313v-60H240z" />
  </Svg>
);
