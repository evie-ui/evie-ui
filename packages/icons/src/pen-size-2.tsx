import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPenSize2 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M200-200q-14-14-14-33t14-33l493-494q14-13 33.5-13.5T760-760q14 14 14 33t-14 33L266-200q-14 14-33 14t-33-14" />
  </Svg>
);
