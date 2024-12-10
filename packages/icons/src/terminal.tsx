import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTerminal = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-418H149zm212-209-83-83q-9-9-8.5-21t9.5-21q9-9 21-9t21 9l91 91q14 14.364 14 34.182T412-404l-91 91q-9 9-21 9t-21-9q-9-9-9-21t9-21zm159 150q-13 0-21.5-8.5T490-318q0-13 8.5-21.5T520-348h160q13 0 21.5 8.5T710-318q0 13-8.5 21.5T680-288z" />
  </Svg>
);
