import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgKeyboardReturnFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m277-432 115 116q14 14 13.5 33T391-250q-14 14-33.5 14T324-250L128-445q-6.909-7.167-10.955-16.328Q113-470.489 113-479.244q0-8.756 4.045-17.706Q121.091-505.9 128-513l197-196q14-14 33.5-14t33.5 14q14 14 14 33.5T392-642L276-525h495v-125q0-19.75 13.675-33.375Q798.351-697 818.088-697q19.737 0 33.824 13.625Q866-669.75 866-650v124q0 38.75-27.394 66.375Q811.213-432 771-432z" />
  </Svg>
);