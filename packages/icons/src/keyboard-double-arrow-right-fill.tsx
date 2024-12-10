import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgKeyboardDoubleArrowRightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M383-481 218-646q-15-14-14.5-33t14.5-33q14-14 32.5-14t33.5 14l197 197q7 7 11 16t4 18q0 9-4 18t-11 16L284-250q-15 14-34 14t-32-14q-15-14-15-33t15-33zm262 0L480-646q-15-14-14.5-33t14.5-33q14-14 32.5-14t33.5 14l197 197q7 7 11 16t4 18q0 9-4 18t-11 16L546-250q-15 14-34 14t-32-14q-15-14-15-33t15-33z" />
  </Svg>
);
