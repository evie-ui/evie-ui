import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTooltip = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M361-215H149q-39.05 0-66.525-27.475Q55-269.95 55-309v-502q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v502q0 39.05-27.769 66.525Q850.463-215 811-215H600L520-94q-14.667 22-40.333 22Q454-72 440-94zm-212-94h662v-502H149zm0 0v-502z" />
  </Svg>
);
