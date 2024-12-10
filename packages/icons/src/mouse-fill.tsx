import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMouseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.977-55q-127.315 0-216.146-88.777Q175-232.554 175-360v-200h611v200q0 127-89.354 216T479.977-55M175-620q0-119 78.5-206T450-924v304zm335 0v-304q118 11 197 97.987Q786-739.027 786-620z" />
  </Svg>
);
