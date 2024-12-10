import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDesktopWindowsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M409-189v-100H149q-39.05 0-66.525-27.769Q55-344.538 55-384v-386q0-39.463 27.475-67.231Q109.95-865 149-865h662q39.463 0 67.231 27.769Q906-809.463 906-770v386q0 39.462-27.769 67.231Q850.463-289 811-289H551v100h39q20 0 33.5 13.5T637-142q0 20-13.5 33.5T590-95H370q-20 0-33.5-13.5T323-142q0-20 13.5-33.5T370-189z" />
  </Svg>
);
