import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRectangleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-40.05 0-67.025-26.975Q55-188.95 55-229v-502q0-40.463 26.975-67.731Q108.95-826 149-826h662q40.463 0 67.731 27.269Q906-771.463 906-731v502q0 40.05-27.269 67.025Q851.463-135 811-135z" />
  </Svg>
);
