import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDensityLarge = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M138-95q-17.625 0-30.312-12.763Q95-120.526 95-138.263 95-156 107.688-169q12.687-13 30.312-13h684q18.05 0 31.025 12.965Q866-156.07 866-138.035T853.025-107.5Q840.05-95 822-95zm0-684q-17.625 0-30.312-12.763Q95-804.526 95-822.263 95-840 107.688-853q12.687-13 30.312-13h684q18.05 0 31.025 12.965Q866-840.07 866-822.035T853.025-791.5Q840.05-779 822-779z" />
  </Svg>
);
