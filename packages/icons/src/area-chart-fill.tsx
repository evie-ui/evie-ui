import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAreaChartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M866-263 547-512q-32-25-72-19t-63 39l-74 102q-12 17-32 20t-35-10L95-522v-114q0-29 25.5-42.5T170-674l104 78 143-200q23-33 63.5-38.5T552-814l137 108h82q40 0 67.5 27.5T866-611zM95-135v-311l150 120q32 25 72 20t64-38l73-102q12-16 32-18.5t35 9.5l345 268v52z" />
  </Svg>
);
