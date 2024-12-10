import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVignetteFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm332-184q99.633 0 171.817-47.5Q725-414 725-480t-72.183-113.5Q580.633-641 481-641q-99.633 0-171.817 47.5Q237-546 237-480t72.183 113.5Q381.367-319 481-319" />
  </Svg>
);
