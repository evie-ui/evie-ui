import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSmartDisplay = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m426-326 209-136q11-7.071 11-20.036Q646-495 635-502L426-638q-12-8-24-1t-12 21v272q0 14 12 21t24-1M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-502H149zm0 0v-502z" />
  </Svg>
);
