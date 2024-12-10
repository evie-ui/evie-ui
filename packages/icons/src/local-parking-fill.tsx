import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalParkingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M380-356v179q0 34.7-24 58.35T297.655-95q-34.345 0-58.5-24.256T215-178v-605q0-35.112 24.256-59.056Q263.512-866 298-866h221q117 0 192 74t75 181.5q0 107.5-75 181T519-356zm0-142h123q48 0 80-32.5t32-80q0-47.5-32-79.5t-80-32H380z" />
  </Svg>
);
