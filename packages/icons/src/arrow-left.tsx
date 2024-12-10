import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgArrowLeft = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M536-280 360.8-455.2q-4.8-4.8-7.3-11.453-2.5-6.654-2.5-13.438 0-6.784 2.5-13.347 2.5-6.562 7.304-11.366l175.314-175.314Q540-684 544.127-686q4.127-2 8.557-2Q563-688 570-681.2q7 6.8 7 17.2v368q0 10.4-7.136 17.2-7.137 6.8-17.319 6.8Q550-272 536-280" />
  </Svg>
);
