import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVariablesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-302v-356q0-19.75 13.625-33.875T142-706h676q19.75 0 33.875 14.125T866-658v356q0 19.75-14.125 33.375T818-255H142q-19.75 0-33.375-13.625T95-302" />
  </Svg>
);
