import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPackage2 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M437-172v-283.625L189-599v283.625zm87 0 247-143.375V-600L524-455.625zM433-66 142-233q-23-13-35-35.207T95-315v-330q0-24.586 12-46.793T142-727l291-168q22-12 47-12t47 12l291 168q23 13 35.5 35.207T866-645v330q0 24.586-12.5 46.793T818-233L527-66q-22 13-47 13t-47-13m209-558 82-48-244-141-81 47zm-162 94 84-49-245-140-83 47z" />
  </Svg>
);
