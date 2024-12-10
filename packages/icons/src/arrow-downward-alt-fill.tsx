import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowDownwardAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-398v-329q0-20 13.5-33.5T480-774q20 0 33.5 13.5T527-727v331l118-118q14-14 33-14t33 14q14 14 14 33t-14 33L513-250q-14 14-34 14t-34-14L247-448q-14-14-14-33t14-33q14-14 33.5-14.5T314-515z" />
  </Svg>
);
