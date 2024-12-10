import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLabelFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M827-425 687-228q-18 25-42.955 39-24.954 14-54.045 14H189q-39.05 0-66.525-27.475Q95-229.95 95-269v-422q0-39.463 27.475-67.231Q149.95-786 189-786h401q29.091 0 54.045 15Q669-756 687-732l140 197q18 24.746 18 54.873T827-425" />
  </Svg>
);
