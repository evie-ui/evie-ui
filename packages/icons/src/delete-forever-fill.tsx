import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDeleteForeverFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M253-95q-40 0-67.5-27T158-189v-553h-11q-20 0-33.5-13.5T100-789q0-20 13.5-33.5T147-836h184q0-20 13.5-34t33.5-14h203q20 0 33.5 14t13.5 34h185q20 0 33.5 13.5T860-789q0 20-13.5 33.5T813-742h-11v553q0 40-27.5 67T707-95zm227-312 88 88q12 13 30 13t31-13q12-13 12-30t-12-30l-88-89 88-90q12-12 12-29.5T629-618q-13-12-31-12t-30 12l-88 89-87-89q-12-12-29.5-12T333-618q-12 13-12 31t12 30l87 89-87 89q-13 12-12.5 29.5T333-319q13 12 30.5 12t30.5-12z" />
  </Svg>
);