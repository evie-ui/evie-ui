import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCribFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.5-55q-82.5 0-159-29.5T182-169q-18-14-20-37t14-39q14-14 33.5-13t34.1 16.267q17.2 13.533 36.3 25.633Q299-204 319-194v-119h-91q-38.05 0-65.525-27.475Q135-367.95 135-406v-236q0-76 54-130t131-54h132q19.875 0 33.938 14.062Q500-797.875 500-778v146h232q38.463 0 66.231 27.475Q826-577.05 826-539v133q0 38.05-27.769 65.525Q770.463-313 732-313h-91v119q20-10 39-22.5t36-27.5q14-14 34.5-14.5t34.587 14.587Q801-229 798.5-207q-2.5 22-19.5 35-63 55-139.5 86t-160 31m.5-94q16 0 33.333-1.5Q530.667-152 547-157v-156H413v156q16.333 5 33.667 6.5Q464-149 480-149" />
  </Svg>
);
