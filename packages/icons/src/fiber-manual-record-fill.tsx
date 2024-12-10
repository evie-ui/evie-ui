import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFiberManualRecordFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.977-175q-125.315 0-215.146-89.685Q175-354.37 175-479.685T264.685-695.5q89.685-90.5 215-90.5T695.5-695.646Q786-605.292 786-479.977q0 125.315-90.354 215.146Q605.292-175 479.977-175" />
  </Svg>
);
