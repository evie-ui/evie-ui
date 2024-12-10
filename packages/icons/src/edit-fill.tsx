import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEditFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M142-95q-20 0-33.5-13.5T95-142v-89q0-19 7.5-37t20.5-31l545-545q9-10 22.5-15.5T718-865q13 0 26 5.5t25 14.5l77 74q10 12 15 25.5t5 27.5q0 14-5.5 27.5T846-667L301-123q-14 13-31.5 20.5T233-95zm581-585 40-39-42-43-41 40z" />
  </Svg>
);
