import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStylusNoteFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M98-348q0 22 21.5 38t61.5 23q17 2 27.5 16t9.5 31q-1 18-14 29.5t-30 9.5q-82-13-122.5-48.5T11-349q0-63 50.5-103T205-505q49-7 67.5-16t18.5-26q0-20-20.5-32.5T205-600q-18-3-28.5-16.5T168-648q1-18 15-29t32-8q78 15 120.5 50t42.5 88q0 48-40.5 81.5T225-420q-63 8-95 26t-32 46m490 122L402-412l349-350q20-20 46-19.5t46 19.5l94 94q20 20 20 46.5T937-575zm-221 90q-25 5-43.5-13.5T310-192l36-170 191 191z" />
  </Svg>
);
