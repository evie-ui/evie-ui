import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSurgicalFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m447-98 88-87h315q18 0 31 12.5t13 30.5q0 19-13 31.5T850-98zm82-247L348-526l358-358q14-14 34-14t34 14l113 113q14 14 14 34t-14 34zM203-98q-56 0-105.5-25.5T9-188l296-295 120 119q17 17 26.5 39.5T461-278q0 24-9.5 47T425-191l-19 19q-36 36-82 55t-97 19z" />
  </Svg>
);
