import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHighlighterSize2 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m270-186-84-84q-14-14-14-33.5t14-33.5l437-437q14-14 33.5-14t33.5 14l84 85q13 14 13.5 33T774-623L337-186q-14 14-33.5 14T270-186" />
  </Svg>
);
