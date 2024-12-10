import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowUpwardAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M435-596 315-479q-14 14-33 13.5T249-480q-14-14-14-33t14-33l198-199q14-14 34-14t34 14l198 199q14 14 14 33t-14 33q-14 14-33 14t-33-14L529-598v331q0 20-13.5 33.5T482-220q-20 0-33.5-13.5T435-267z" />
  </Svg>
);
