import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPottedPlantFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M337-55q-33 0-58.5-19T245-125l-48-168h567l-47 168q-9 32-34.5 51T625-55zm144-594q5-94 73-160.5T716-898q6-1 12 0t10 5q4 5 5.5 10.5t.5 11.5q-17 83-75.5 143T527-653v100h291q20 0 34 13.5t14 33.5v75q0 40-27 67t-63 27H185q-37 0-63.5-27T95-431v-75q0-20 13.5-33.5T142-553h292v-100q-84-13-141.5-74T218-871q-1-6 .5-11.5T224-893q4-4 9.5-5.5t11.5-.5q95 21 163.5 88T481-649" />
  </Svg>
);
