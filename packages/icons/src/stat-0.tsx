import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStat0 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M414-230 230-414q-14-14-20.5-31t-6.5-35q0-18 6.5-35t20.5-31l184-184q14-14 31-20.5t35-6.5q18 0 35 6.5t31 20.5l184 184q14 14 20.5 31t6.5 35q0 18-6.5 35T730-414L546-230q-14 14-31 20.5t-35 6.5q-18 0-35-6.5T414-230m66-64 186-186-186-186-186 186zm0-186" />
  </Svg>
);
