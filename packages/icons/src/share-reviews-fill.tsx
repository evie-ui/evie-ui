import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShareReviewsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M572.827-368Q606-368 629-390.819t23-56.681q0-33.862-22.819-56.681Q606.362-527 572.88-527q-16.386 0-30.633 5.5T517-505l-96-47.724q1-1.138 1-3.207v-7.944q0-2.375-1-4.125l97-48q10.744 12 24.43 17.5t30.525 5.5Q606-593 629-615.819t23-56.681q0-33.862-23-56.681Q606-752 572.827-752q-33.172 0-56 21.5Q494-709 493-678v4q0 2.333 1 4l-102.347 51q-10.861-10.1-23.755-15.55Q355.003-640 340.12-640q-33.482 0-56.801 23.487Q260-593.026 260-559.832t23.438 56.513Q306.875-480 340-480q14.926 0 27.859-5.45 12.933-5.45 23.794-15.55L494-450q-1 1.667-1 4v4q1 31 23.827 52.5 22.828 21.5 56 21.5M215-215l-79 79q-23 23-52 11.125T55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v502q0 39.05-27.769 66.525Q850.463-215 811-215z" />
  </Svg>
);
