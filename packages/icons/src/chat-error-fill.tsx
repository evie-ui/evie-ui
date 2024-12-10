import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgChatErrorFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m215-215-79 79q-23 23-52 11.5T55-168v-643q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 39-28 66.5T811-215zm265-289 76 76q12 12 27.5 12t28.5-12q12-12 12-28t-12-28l-76-76 76-76q12-12 12-27.5T612-692q-12-12-28-12t-28 12l-76 76-76-76q-12-12-27.5-12T348-692q-12 12-12 28t12 28l76 76-76 76q-12 12-12 27.5t12 28.5q12 12 28 12t28-12z" />
  </Svg>
);