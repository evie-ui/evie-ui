import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAvgTimeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M378-860q-17 0-29-12t-12-30q0-18 12-29.5t30-11.5h203q18 0 29.5 11.5T623-902q0 18-11.5 30T582-860zm22 497-37-75q-6-9-15-15t-20-6H97q15-147 123.5-247T480-806q69 0 130 22t108 63l31-31q13-13 30-12.5t30 12.5q13 14 13 31t-13 30l-30 30q31 36 55.5 85.5T864-459H658l-69-139q-11-21-36-21t-36 21zm80 328q-151 0-259.5-98.5T97-379h206l69 138q11 23 35.5 22t35.5-22l117-234 37 73q6 10 15 16.5t21 6.5h231q-16 147-125 245.5T480-35" />
  </Svg>
);
