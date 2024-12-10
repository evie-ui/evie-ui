import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAirplanemodeActive = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M331-55v-73l82-60v-225L55-308v-91l358-209v-230q0-29 19.5-48.5T480-906q28 0 47.5 19.5T547-838v230l359 209v91L547-413v225l83 60v73L480-96z" />
  </Svg>
);
