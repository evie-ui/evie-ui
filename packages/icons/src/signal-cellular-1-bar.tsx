import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSignalCellular1Bar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M168-55q-22 0-34.5-14.5T121-102q0-8 3.5-17t11.5-17l689-689q7-7 16-10.5t17-3.5q18 0 33 12.5t15 34.5v666q0 30-20.5 50.5T835-55zm279-94h364v-530L447-315z" />
  </Svg>
);
