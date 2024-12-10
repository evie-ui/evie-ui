import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPianoOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M817.286-54.75 775-95H189q-39.8 0-66.9-27.1Q95-149.2 95-189v-586l-41-42q-10-10.2-10.5-24.6Q43-856 54.158-867q10.737-11 25.5-11T105-867l762 762q10 10 10 25t-9.947 25q-10.527 11-25 11-14.474 0-24.767-10.75M866-208l-95-94v-469h-86v351.957q0 5.043-4.25 10.543Q676.5-403 670-403L522-551v-220h-84v136L208-866h563q40.213 0 67.606 27.394Q866-811.213 866-771zm-677 19h136v-195h-14q-16.15 0-26.075-9.925T275-419.687V-595l-86-86zm199 0h184v-110L433.176-437v27Q431-399 423-391.5t-21 7.5h-14zm231 0h62l-62-62z" />
  </Svg>
);
