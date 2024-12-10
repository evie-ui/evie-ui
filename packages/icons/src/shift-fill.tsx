import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgShiftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M305-152v-263H187q-29.362 0-42.681-27Q131-469 151-493l293-365q13.88-18 35.94-18Q502-876 517-858l292 365q20 24 6.681 51-13.319 27-42.681 27H655v263q0 19.75-13.625 33.375T608-105H352q-19.75 0-33.375-13.625T305-152" />
  </Svg>
);
