import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShadowFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-55q-39.05 0-66.525-27.475Q55-109.95 55-149v-490q0-39.463 27.475-67.231Q109.95-734 149-734h78v-77q0-39.463 27.475-67.231Q281.95-906 321-906h490q39.463 0 67.231 27.769Q906-850.463 906-811v490q0 39.05-27.769 66.525Q850.463-227 811-227h-77v78q0 39.05-27.769 66.525Q678.463-55 639-55zm172-266h490v-490H321z" />
  </Svg>
);
