import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCakeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M147-57q-31 0-53-22t-22-52v-170q0-28.75 16.625-52.875T132-388h696q26.75 10 43.375 34.125T888-301v170q0 30-21.5 52T814-57zm12-391v-110q0-38.75 27.625-66.375T254-652h179v-47q-20-15-30.5-34.034T392-779.411q0-17.589 6-34.089t19-29.5l46-47q2-2 17.286-7Q483-897 497-890l46 47q13 13 19.5 29.5t6.5 34.089q0 27.343-11 46.377Q547-714 527-699v47h180q38.75 0 66.375 27.625T801-558v110z" />
  </Svg>
);
