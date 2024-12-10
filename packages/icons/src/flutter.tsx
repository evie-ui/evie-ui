import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFlutter = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M211-329 60-480l490.127-490H852zM550 10 286-254l264.059-264H852L587.889-254 852 10z" />
  </Svg>
);
