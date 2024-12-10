import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAgenderFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-73q-110 0-187.5-77.5T215-338q0-98 62.5-170.5T433-597v-270h94v270q94 16 156 88t62 171q0 110-77 187.5T480-73m0-94q61 0 105-36t57-91H318q13 55 58 91t104 36M317-381h326q-13-56-57.5-91.5T480-508q-59 0-104.5 35.5T317-381" />
  </Svg>
);
