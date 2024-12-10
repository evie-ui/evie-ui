import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCardTravelFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M282-746v-88q0-39 27.475-66.5T376-928h207q39.05 0 66.525 27.5Q677-873 677-834v88h134q39.463 0 67.231 27.769Q906-690.463 906-651v462q0 39.05-27.769 66.525Q850.463-95 811-95H149q-39.05 0-66.525-27.475Q55-149.95 55-189v-462q0-39.463 27.475-67.231Q109.95-746 149-746zm94 0h207v-88H376zM149-275h662v-131H149z" />
  </Svg>
);
