import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTab = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-229h662v-338H571q-19.75 0-33.375-13.625T524-614v-117H149zm0 94q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94v-502z" />
  </Svg>
);
