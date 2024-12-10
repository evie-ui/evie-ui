import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCommentBank = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m215-215-79 79q-23 23-52 10.969T55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v502q0 39.05-27.769 66.525Q850.463-215 811-215zm596-94v-502H707v212q0 13-11.5 20.5t-23.5.5l-44-21q-8.455-4-17.227-4Q602-603 594-599l-44 21q-13 7-24.5-.5T514-599v-212H149v548l40-46zm-662 0v-502z" />
  </Svg>
);
