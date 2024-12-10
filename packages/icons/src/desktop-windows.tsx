import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDesktopWindows = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M409-189v-100H149q-39.05 0-66.525-27.769Q55-344.538 55-384v-386q0-39.463 27.475-67.231Q109.95-865 149-865h662q39.463 0 67.231 27.769Q906-809.463 906-770v386q0 39.462-27.769 67.231Q850.463-289 811-289H551v100h39q19.75 0 33.375 13.675Q637-161.649 637-141.825 637-122 623.375-108.5 609.75-95 590-95H370q-19.75 0-33.375-13.675Q323-122.351 323-142.175 323-162 336.625-175.5 350.25-189 370-189zM149-384h662v-386H149zm0 0v-386z" />
  </Svg>
);
