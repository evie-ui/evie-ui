import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPenSize1Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M187-186.857q-11-10.857-11-25.818 0-14.961 11-26.325l534-534q11.182-11 26.091-11T773-773.143q11 10.857 11 25.818 0 14.961-11 26.325L239-187q-11.182 11-26.091 11T187-186.857" />
  </Svg>
);
