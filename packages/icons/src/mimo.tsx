import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMimo = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-227q-39.05 0-66.525-27.475Q55-281.95 55-321v-450q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v450q0 39.05-27.769 66.525Q850.463-227 811-227H652l46 46q7 7.286 10 15.686 3 8.401 3 17.314v13q0 17-11.5 28.5T671-95H289q-17 0-28.5-11.5T249-135v-14q0-8.565 3-16.64 3-8.074 10-15.36l45-46zm0-94h662v-450H149zm0 0v-450z" />
  </Svg>
);
