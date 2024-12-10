import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCommentBankFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m215-215-79 79q-23 23-52 11.5T55-168v-643q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 39-28 66.5T811-215zm299-596v212q0 13 11.5 20.5t24.5.5l44-21q8-4 17-4t17 4l44 21q12 7 23.5-.5T707-599v-212z" />
  </Svg>
);
