import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSearchCheckFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m357-589 56-56q12-12 29.5-12t29.5 13q12 12 12 29t-12 29l-81 81q-14 15-33.5 15T324-504l-43-43q-12-13-12.5-30t12.5-30q12-12 29.5-12t30.5 12zm15 277q-115.162 0-195.081-80Q97-472 97-585t80-193q80-80 193.5-80t193 80Q643-698 643-584.85q0 44.85-12.5 83.35Q618-463 593-429l236 234q14 14.556 14 34.278T829-127q-15 15-34.722 15T761-127L526-361q-29 23-68.459 36T372-312m-1-94q75.25 0 126.625-52T549-585q0-75-51.375-127T371-764q-75.083 0-127.542 52Q191-660 191-585t52.458 127Q295.917-406 371-406" />
  </Svg>
);
