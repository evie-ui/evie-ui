import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHumidityLowFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-75q-143 0-244-98.209T135-414q0-68.928 26.5-131.665Q188-608.401 237-656.5L480-896l243 239.5q49 48.099 76 110.835Q826-482.928 826-414q0 142.582-101.5 240.791T480-75m-.235-94Q584-169 657.5-239.567 731-310.134 731-414.466q0-47.582-19-92.558Q693-552 658.833-585.56L480-763 301.167-585.56Q267-552 248-507.028q-19 44.972-19 92.599Q229-310 302.265-239.5q73.264 70.5 177.5 70.5" />
  </Svg>
);
