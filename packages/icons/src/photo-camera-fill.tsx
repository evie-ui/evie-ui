import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhotoCameraFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-261q75 0 125.5-50.5t50.5-125q0-75.5-50.5-126t-125-50.5q-75.5 0-126 50.417Q304-512.167 304-437q0 75 50.417 125.5Q404.833-261 480-261m0-80q-42 0-69-27.5T384-437q0-42 27-69.5t69-27.5q41 0 69 27.5t28 69.5q0 41-28 68.5T480-341M149-95q-39.05 0-66.525-27.475Q55-149.95 55-189v-495q0-38.463 27.475-66.731Q109.95-779 149-779h125l56-60q13-14 30-20.5t36-6.5h169q17.875 0 34.938 6.5Q617-853 630-839l57 60h124q38.463 0 66.731 28.269Q906-722.463 906-684v495q0 39.05-28.269 66.525Q849.463-95 811-95z" />
  </Svg>
);
