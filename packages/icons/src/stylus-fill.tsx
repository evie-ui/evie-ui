import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStylusFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M170-101q-32 7-54-15.5T101-170l40-191 220 220zm237-80L181-407l433-433q28-28 66.5-28t65.5 28l94 94q28 27 28 65.5T840-614z" />
  </Svg>
);
