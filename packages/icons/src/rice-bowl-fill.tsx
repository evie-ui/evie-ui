import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRiceBowlFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M297-57v-78q-106-46-173-138T57-480q0-87.712 33-164.856Q123-722 180.5-779.5T315.106-870q77.107-33 164.775-33 87.669 0 164.894 33Q722-837 779.5-779.5T870-644.856Q903-567.712 903-480q0 115-67 207T663-134.5V-57zm110-439h146v-304q-18.7-4-36.65-6.5t-35.9-2.5q-17.95 0-36.283 2.5-18.334 2.5-37.167 6.643zm-255 0h161v-264q-72.625 41.026-115.312 110.513Q155-580 152-496m495 0h161q-3-84-45.688-153.487Q719.625-718.974 647-760z" />
  </Svg>
);
