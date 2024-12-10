import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCardMembershipFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v462q0 39.05-27.769 66.525Q850.463-255 811-255H646v133q0 27-23 41t-46 1l-75-38q-11-4-22-4t-21 4l-76 38q-23 13-45.5-1T315-122v-133H149q-39.05 0-66.525-27.475Q55-309.95 55-349v-462q0-39.463 27.475-67.231Q109.95-906 149-906m0 465h662v-131H149z" />
  </Svg>
);
