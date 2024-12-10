import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFastRewind = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M843-244 558-441q-11-6.957-16-17.478Q537-469 537-480q0-11 5-21.522 5-10.521 16-17.478l285-197q6-4 12.273-6.5 6.272-2.5 14.666-2.5Q889-725 903-712.15T917-678v396q0 21.3-14.133 34.15Q888.733-235 870.222-235q-8.222 0-14.722-2.5T843-244m-457 0L101-441q-11-6.957-16-17.478Q80-469 80-480q0-11 5-21.522 5-10.521 16-17.478l285-197q6-4 13-6.5t14-2.5q18.6 0 32.8 12.85Q460-699.3 460-678v396q0 21.3-14.2 34.15Q431.6-235 413-235q-7 0-14-2.5t-13-6.5m-20-128v-216L210-480zm457 0v-216L667-480z" />
  </Svg>
);
