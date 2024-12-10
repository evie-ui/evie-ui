import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgArrowLeftAlt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m319-433 119 119q13 14 13 33.5T437-248q-14 14-33 13.5T372-248L173-446q-14-14-14-34t14-34l200-199q13-13 32-13.5t33 12.5q14 14 13.5 34T438-647L319-527h456q20 0 33.5 13.5T822-480q0 20-13.5 33.5T775-433z" />
  </Svg>
);
