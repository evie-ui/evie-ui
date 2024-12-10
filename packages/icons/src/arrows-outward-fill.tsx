import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowsOutwardFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M724-431H510v-96h214l-63-62q-14-14-14-33t15-32q13-14 33.5-14t34.5 14l141 142q7 7 11 15.5t4 18.5q0 9-4 18t-11 15L728-301q-14 13-33 13t-33-13q-15-14-15-34t14-34zm-490 0 64 63q14 14 14 33t-14 33q-13 13-33 13t-34-13L88-445q-7-6-11-15t-4-18q0-10 4-18.5T88-512l144-143q13-14 32-13.5t34 14.5q14 13 14 32t-14 33l-62 62h214v96z" />
  </Svg>
);
