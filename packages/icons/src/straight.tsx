import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStraight = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m433-686-57 57q-14 14-33 14t-33-14q-14-14-14-33t14-33l136-137q14-14 34-14t34 14l136 137q14 14 14 33t-14 33q-14 14-33 14.5T584-629l-57-57v544q0 20-13.5 33.5T480-95q-20 0-33.5-13.5T433-142z" />
  </Svg>
);
