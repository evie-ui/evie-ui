import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCallToAction = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-502H149zm0 0v-502zm140-54h383q21.667 0 36.833-15.441Q724-313.882 724-335.941 724-358 708.833-373 693.667-388 672-388H288q-21.667 0-36.833 15.235-15.167 15.236-15.167 37Q236-314 251.458-298.5 266.917-283 289-283" />
  </Svg>
);
