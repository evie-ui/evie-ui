import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWidthFullFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.8 0-66.9-27.1Q55-189.2 55-229v-502q0-40.213 27.1-67.606Q109.2-826 149-826h662q40.213 0 67.606 27.394Q906-771.213 906-731v502q0 39.8-27.394 66.9Q851.213-135 811-135zm0-94h70v-502h-70zm592 0h70v-502h-70z" />
  </Svg>
);
