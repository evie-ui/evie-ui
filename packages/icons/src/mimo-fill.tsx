import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMimoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-227q-39.05 0-66.525-27.475Q55-281.95 55-321v-450q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v450q0 39.05-27.769 66.525Q850.463-227 811-227H652l46 46q7 7.429 10 15.714Q711-157 711-148v13q0 17.3-11.35 28.65Q688.3-95 671-95H289q-17.3 0-28.65-11.35Q249-117.7 249-135v-14q0-9 3-16.786 3-7.785 10-15.214l45-46z" />
  </Svg>
);
