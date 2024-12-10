import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgForward = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M772-524 613-684q-15-14-15-33.5t15-33.5q14-14 32.5-14t33.5 14l193 193q7 7 11 16t4 18q0 9-4 18t-11 16L680-298q-14 14-34 14t-33-14q-15-14-15-33t14-33zm-276 47H271q-54 0-87.5 33.5T150-356v134q0 20-13.5 33.5T103-175q-20 0-33.5-13.5T56-222v-134q0-91 61.5-153T271-571h225L384-685q-14-13-14-32.5t14-33.5q13-14 32.5-14t33.5 14l193 193q7 7 11 16t4 18q0 9-4 18t-11 16L451-298q-14 14-34 14t-33-14q-14-14-14-33t14-33z" />
  </Svg>
);
