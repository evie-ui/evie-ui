import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPushPinFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m660-474 86 77v95H527v238l-47 47-47-47v-238H215v-95l80-77v-314h-50v-94h465v94h-50z" />
  </Svg>
);
