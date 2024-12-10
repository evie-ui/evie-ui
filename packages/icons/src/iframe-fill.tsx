import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgIframeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M447-360q-20 0-33.5-13.5T400-407v-106q0-20 13.5-33.5T447-560h226q20 0 33.5 13.5T720-513v106q0 20-13.5 33.5T673-360zM149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-402H149z" />
  </Svg>
);
