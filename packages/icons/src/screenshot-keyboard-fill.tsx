import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgScreenshotKeyboardFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-313q70 0 118.5-48.5T647-480q0-70-48.5-118.5T480-647q-70 0-118.5 48.5T313-480q0 70 48.5 118.5T480-313M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135z" />
  </Svg>
);
