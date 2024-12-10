import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDirectionsWalkFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M425-353 356-60q-4 14-14.828 22.5-10.827 8.5-26.689 8.5Q295-29 282.5-43.5T274-78l105-532-82 36v94q0 17.75-12.175 29.375-12.176 11.625-29 11.625Q238-439 225.5-450.913 213-462.825 213-481v-118q0-14.333 7.875-26.722Q228.75-638.111 243-644l177.292-71.219Q436-721 453-722.5t34 1.5q18 4 32.5 12.875T543-685l44 66q15 23 34 40.5t42 30.5q15 9 30 14t32 8q17.108 4.25 28.054 16.375Q764-497.5 764-479.75t-11.781 29.25Q740.439-439 723-442q-55-6-100.5-30.5T539-543l-31 123 75 68q7 6.552 11 16.241 4 9.69 4 18.759v247q0 16.75-12.175 28.875Q573.649-29 556.825-29 540-29 528-41.125T516-70v-191zm124.08-412q-35.08 0-59.58-24.92-24.5-24.921-24.5-60 0-36.08 24.42-60.58 24.421-24.5 59.5-24.5Q584-935 609-910.58q25 24.421 25 60.5Q634-815 609.08-790q-24.921 25-60 25" />
  </Svg>
);
