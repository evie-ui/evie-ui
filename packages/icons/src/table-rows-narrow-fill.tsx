import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTableRowsNarrowFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M142-287q-20 0-33.5-14T95-335v-68q0-19 13.5-33t33.5-14h676q20 0 34 14t14 33v68q0 20-14 34t-34 14zm0-223q-20 0-33.5-14T95-557v-69q0-19 13.5-33t33.5-14h676q20 0 34 14t14 33v69q0 19-14 33t-34 14zm0-223q-20 0-33.5-14T95-780v-68q0-20 13.5-34t33.5-14h676q20 0 34 14t14 34v68q0 19-14 33t-34 14zm0 668q-20 0-33.5-13.5T95-112v-68q0-19 13.5-33t33.5-14h676q20 0 34 14t14 33v68q0 20-14 33.5T818-65z" />
  </Svg>
);
