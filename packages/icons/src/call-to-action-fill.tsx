import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCallToActionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm140-148h383q22 0 37-15.5t15-37.5q0-22-15-37t-37-15H288q-22 0-37 15t-15 37q0 22 15.5 37.5T289-283" />
  </Svg>
);
