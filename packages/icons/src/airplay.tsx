import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAirplay = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M55-269v-502q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v502q0 39.8-27.394 66.9Q851.213-175 811-175h-73v-94h73v-502H149v502h72v94h-72q-39.8 0-66.9-27.1Q55-229.2 55-269m250 114 141-142q14.727-14 34.364-14Q500-311 514-297l142 142q16 17 7 39t-32 22H330q-24 0-33-22t8-39m175-318" />
  </Svg>
);
