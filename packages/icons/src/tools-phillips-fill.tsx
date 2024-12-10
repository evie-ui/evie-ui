import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgToolsPhillipsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M305-80q-20 0-33.5-13.5T258-128q0-20 13.5-33.5T305-175h350q20 0 34 13.5t14 33.5q0 21-14 34.5T655-80zm0-155q-20 0-33.5-13.5T258-282v-352q0-15 4.5-29.5T276-691l128-169q7-9 17.5-14.5T443-880h74q11 0 21.5 5.5T556-860l128 169q9 13 14 27.5t5 29.5v352q0 20-14 33.5T655-235zm47-279 85-85v-147l-85 112zm256 0v-120l-84-112v147z" />
  </Svg>
);
