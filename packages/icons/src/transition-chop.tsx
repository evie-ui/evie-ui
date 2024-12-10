import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTransitionChop = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-161 465-121-80.935-314H149zm118 67h544v-502H631l75 291q9 38-10.438 71.985Q676.123-334.031 638-325zM149-731" />
  </Svg>
);
