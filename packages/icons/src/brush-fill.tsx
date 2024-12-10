import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBrushFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M209-93q-38 0-79-18t-76-63q43-12 58.5-32.5T131-268q3-47 37-80t86-33q52 0 88 36t36 88q0 72-49 118T209-93m251-253L347-464l410-411q14-13 31-14t32 14l53 53q15 15 14 32.5T873-758z" />
  </Svg>
);
