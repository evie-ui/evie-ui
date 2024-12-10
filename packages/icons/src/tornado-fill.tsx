import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTornadoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m96-713 38 66h692l38-66q28-48 .5-95T782-855H178q-55 0-82.5 47t.5 95m93 160 60 106h462l61-106zm116 200 93 162q28 48 82 48t82-48l94-162z" />
  </Svg>
);
