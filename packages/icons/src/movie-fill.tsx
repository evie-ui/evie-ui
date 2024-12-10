import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMovieFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m149-826 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h94q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135H149q-39.05 0-66.525-26.5Q55-188 55-227v-504q0-39.463 27.475-67.231Q109.95-826 149-826" />
  </Svg>
);
