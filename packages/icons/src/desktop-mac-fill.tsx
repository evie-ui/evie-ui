import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDesktopMacFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M407-226H149q-39.05 0-66.525-27.475Q55-280.95 55-320v-451q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v451q0 39.05-27.769 66.525Q850.463-226 811-226H554l77 79q1 .783 7 15.478v13.696q0 10.13-6.286 16.478Q625.429-95 615-95H337.877Q331-95 327-99q-4-4-4-10.5v-24.333q0-.834 5-12.167z" />
  </Svg>
);
