import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgChangeHistoryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M120-135q-29 0-42-24t2-48l362-576q14-22 39-22t39 22l360 576q14 24 1.5 48T840-135z" />
  </Svg>
);
