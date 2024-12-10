import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextureAdd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M164-95q-29-10-44.5-27T95-168l700-698q25 7 44.5 27t25.5 46zM95-350v-131l384-385h131zm0-324v-97q0-39 27.5-67t66.5-28h97zm771 64v131l-21 21q-26-13-53.5-18.5T737-481zM350-95l142-141q-1 27 5 54t19 53l-35 34zm341-93h-73q-20 0-33.5-13.5T571-235q0-20 13.5-33.5T618-282h73v-73q0-20 13.5-33.5T738-402q20 0 34 13.5t14 33.5v73h72q20 0 34 13.5t14 33.5q0 20-14 33.5T858-188h-72v73q0 20-14 33.5T738-68q-20 0-33.5-13.5T691-115z" />
  </Svg>
);
