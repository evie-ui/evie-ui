import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOutgoingMailFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m734-140-66-66 56-57H567v-94h157l-56-57 66-66 170 170zM416-526l267-142v-95h-8L416-631 166-763h-9v103zM161-263q-40.8 0-69.4-28.6Q63-320.2 63-361v-398q0-40.8 28.6-69.4Q120.2-857 161-857h518q40.8 0 69.4 28.6Q777-799.8 777-759v197q-11.5-3-23.5-4t-23.5-1q-110 0-183.5 71.5T473-313q0 13.333 1 25.167Q475-276 478-263z" />
  </Svg>
);
