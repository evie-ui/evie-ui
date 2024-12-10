import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCreditCard = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135H149q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731m-757 98h662v-98H149zm0 129v275h662v-275zm0 275v-502z" />
  </Svg>
);
