import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMagnificationLarge = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M250-368h378q19.75 0 33.375-13.625T675-415v-215q0-19.75-13.625-33.375T628-677H250q-19.75 0-33.375 13.625T203-630v215q0 19.75 13.625 33.375T250-368M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-502H149zm0 0v-502z" />
  </Svg>
);