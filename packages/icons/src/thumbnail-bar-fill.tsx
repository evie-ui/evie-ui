import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgThumbnailBarFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-40 0-67-26.975T55-229v-502q0-40.463 26.975-67.731Q108.95-826 149-826h199v691zm259 0v-691h403q40.463 0 67.731 27.269Q906-771.463 906-731v502q0 40.05-27.269 67.025Q851.463-135 811-135z" />
  </Svg>
);
