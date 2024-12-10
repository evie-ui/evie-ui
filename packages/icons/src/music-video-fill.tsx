import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMusicVideoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M430-292q38 0 64-26.5t26-63.821V-594h72q15 0 25.5-10.5T628-630q0-15-10.5-25.5T592-666h-72q-15 0-25.5 10.615T484-629.6V-456q-10-7-25.5-11.5T430-472q-38 0-64 26.5T340-382q0 37 26 63.5t64 26.5M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135z" />
  </Svg>
);
