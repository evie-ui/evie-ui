import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocationDisabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m801-256-71-71q19-29 32-68.5t13-82.5q0-122-86.5-208.5T480-773q-43 0-83 13t-68 32l-70-70q34-29 82.5-45t97.5-21v-35q0-17 12-29t29-12q17 0 29 12t12 29v35q139 15 234.5 110.5T866-519h35q17 0 29 12t12 29q0 17-12 29t-29 12h-35q-5 47-20 93t-45 88M439-57v-35q-139-15-234.5-110.5T94-437H59q-17 0-29-12t-12-29q0-17 12-29t29-12h35q6-52 20-95t42-82l-97-97q-11-11-10.5-25.5T60-844q11-10 25.5-10t25.5 10l735 735q10 11 10 25.5T846-58q-11 11-26 10.5T794-59l-98-96q-39 27-82.5 42T521-92v35q0 17-12 29t-29 12q-17 0-29-12t-12-29m41-126q38 0 73-10t73-32L227-624q-20 35-31 68t-11 78q0 122 86.5 208.5T480-183" />
  </Svg>
);