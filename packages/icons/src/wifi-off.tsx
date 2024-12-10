import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWifiOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M774-87 417-441q-36 9-66.5 26T295-379q-21 14-44 15t-41-16q-17-17-16.5-40.5T212-459q25-21 52.5-39t64.5-33l-94-93q-31 17-59 36t-53 39q-19 15-43 15t-41-17q-17-16-15.5-39.5T43-630q26-23 53.5-42.5T151-707l-65-65q-11-11-11-25t11-26q12-11 26-11t26 11l686 687q10 10 10 24.5T824-87q-11 11-25.5 11T774-87m-294-40q-36 0-63-27t-27-63q0-36 27-63t63-27q36 0 63 27t27 63q0 36-27 63t-63 27m285-267q-12 12-29 12.5T706-392q-22-18-44-32.5T610-452L506-556q79 4 140 32t114 74q13 12 14.5 28.5T765-394m157-156q-17 17-41.5 17T836-548q-79-64-166.5-101.5T480-687q-27 0-52 4t-40 9l-96-96q44-16 89-23t99-7q126 0 237.5 47T919-626q17 15 18 37.5T922-550" />
  </Svg>
);
