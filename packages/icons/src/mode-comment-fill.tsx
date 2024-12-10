import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgModeCommentFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-215q-39.05 0-66.525-27.475Q55-269.95 55-309v-502q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v643q0 31.625-29.5 43.312Q847-113 825-136l-79-79z" />
  </Svg>
);
