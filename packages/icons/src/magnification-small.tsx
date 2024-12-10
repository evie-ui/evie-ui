import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMagnificationSmall = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-502H149zm0 0v-502zm131-299q30.525 0 52.263-22.031Q354-572.062 354-603q0-30.525-21.86-52.263Q310.281-677 279.584-677q-30.696 0-52.64 21.86Q205-633.281 205-602.584q0 30.697 22.031 52.64Q249.063-528 280-528" />
  </Svg>
);
