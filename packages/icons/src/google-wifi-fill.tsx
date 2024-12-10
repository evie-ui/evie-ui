import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGoogleWifiFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m77-546 13-195q2-36 27.5-60.5T179-826h601q36 0 61.5 24.5T870-741l13 195zm118 411-9-30h-39q-39 0-65.5-28T58-261l15-225h813l15 225q3 40-23.5 68T812-165h-39l-9 30z" />
  </Svg>
);
