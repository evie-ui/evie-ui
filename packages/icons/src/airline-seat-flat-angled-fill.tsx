import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAirlineSeatFlatAngledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m406-445 55-152q13-37 48.5-53t72.5-3l247 89q67 25 97 90t6 133l-28 77q-7 19-24 27t-36 1L433-386q-19-6-26.5-23t-.5-36M791-91 74-353q-18-7-26.5-24.5T46-413q7-19 24-26.5t35-1.5l718 262q19 7 27 24t1 35q-7 19-24.5 27.5T791-91M267-455q-59 0-100.5-42T125-599q0-59 41.5-101T267-742q59 0 101 42t42 101q0 60-42 102t-101 42" />
  </Svg>
);
