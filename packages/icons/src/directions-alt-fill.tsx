import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDirectionsAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.356-55Q462-55 444-61.5T413-80L80-413q-12-13-18.5-30.89t-6.5-36.5q0-18.61 6.5-36.11T80-547l333-333q13.239-13 31.07-19.5t36.381-6.5q18.549 0 36.061 6.5T547-880l333 333q13 13.07 19.5 30.697t6.5 35.965q0 18.338-6.5 36.204T880-413L547-80q-13 12-30.644 18.5t-36 6.5M561-450 458-347q-9 9-8.5 21t9.5 21q9 9 21.5 9t21.5-9l141-141q14-14.727 14-34.364Q657-500 643-514L501.284-655.716Q492-665 480-665q-12 0-21 9t-9 21.5q0 12.5 9 21.5l102 103H313q-13 0-21.5 8.5T283-480q0 13 8.5 21.5T313-450z" />
  </Svg>
);
