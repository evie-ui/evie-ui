import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHardDriveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M682.51-321Q703-321 718-335.5q15-14.5 15-35.01Q733-391 718-406q-15-15-35-15-21 0-35.5 15T633-371q0 21 14.5 35.5t35.01 14.5M58-561l145-195q12-16 30.109-22 18.108-6 35.891-6h422q17.783 0 35.891 6Q745-772 757-756l146 195zm94 382q-39.9 0-66.95-27.337Q58-233.675 58-274v-227h845v227q0 40.325-27.269 67.663Q848.463-179 808-179z" />
  </Svg>
);
