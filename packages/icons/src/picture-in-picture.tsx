import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPictureInPicture = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-502H149zm0 0v-502zm335-205h241q19.75 0 33.375-13.625T772-481v-163q0-19.75-13.625-33.375T725-691H484q-19.75 0-33.375 13.625T437-644v163q0 19.75 13.625 33.375T484-434m13-60v-137h215v137z" />
  </Svg>
);
