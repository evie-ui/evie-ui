import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCallMerge = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M239-168.5q-14-14.5-14-33.233 0-18.734 14-33.267l192-191v-259l-72 72q-14.364 14-33.182 13.5T293-614q-14-14-14-33.3 0-19.3 14-33.7l151-152q7.16-6 16.18-10.5t17.9-4.5q8.88 0 17.9 4.5Q505-839 512-833l152 153q14 14.364 14 33.182T664-614q-14 14-33.3 14-19.3 0-33.7-14l-72-71v258q0 18.511-7.5 36.256Q510-373 497-359L305-168q-14 15-33 14.5t-33-15m477.087-.587Q702-155 682.5-155q-19.5 0-33.5-14l-96-95q-14-14-13.5-33.429.5-19.428 14.026-32.5 13.527-14.071 33-14.071Q606-344 620-330l96 95q14.167 14.75 13.583 33.375Q729-183 716.087-169.087" />
  </Svg>
);
