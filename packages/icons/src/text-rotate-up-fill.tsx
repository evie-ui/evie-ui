import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextRotateUpFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m698-693-23 23q-13 13-29.5 12.5T617-670q-13-13-13-29.5t13-28.5l89-89q14-14 34-14t34 14l89 89q12 12 12 29.5T863-670q-12 12-29.5 12T804-670l-23-23v509q0 18-11.5 29.5T740-143q-18 0-30-12t-12-30zM433-386l68 23q12 4 19.5 14t7.5 23q0 21-17.5 32.5T473-289L115-422q-12-5-19.5-15T88-461v-32q0-13 7.5-23.5T115-532l356-132q21-8 39 4.5t18 35.5q0 14-8.5 25T498-584l-65 24zm-62-17v-142l-200 69v4z" />
  </Svg>
);
