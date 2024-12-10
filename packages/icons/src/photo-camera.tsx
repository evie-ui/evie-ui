import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPhotoCamera = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.265-261Q555-261 605.5-311.265q50.5-50.264 50.5-125.5Q656-512 605.735-562.5q-50.264-50.5-125.5-50.5Q405-613 354.5-562.819 304-512.637 304-437.735 304-362 354.181-311.5 404.363-261 479.265-261m.235-80q-41.5 0-68.5-27.5t-27-69q0-41.5 27-69t68.5-27.5q41.5 0 69.5 27.5t28 69q0 41.5-28 69T479.5-341M149-95q-39.05 0-66.525-27.475Q55-149.95 55-189v-495q0-38.463 27.475-66.731Q109.95-779 149-779h125l56-60q13-14 30-20.5t36-6.5h169q17.875 0 34.938 6.5Q617-853 630-839l57 60h124q38.463 0 66.731 28.269Q906-722.463 906-684v495q0 39.05-28.269 66.525Q849.463-95 811-95zm0-94h662v-495H647l-81-87H396l-85 87H149zm331-248" />
  </Svg>
);