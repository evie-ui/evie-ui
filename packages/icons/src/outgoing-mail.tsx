import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOutgoingMail = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m734-140-66-66 56-57H567v-94h157l-56-57 66-66 170 170zM157-263q-38.75 0-66.375-27.625T63-357v-406q0-38.75 27.625-66.375T157-857h526q38.75 0 66.375 27.625T777-763v201q-11.5-3-23.5-4t-23.5-1q-12 0-23.5 1.5T683-562v-138L416-511 157-699v342h320q-3 14-3.5 23.5t-.5 20.75q0 11.25 1 24t4 25.75zm72-500 187 136 191-136zm-72 406v-406z" />
  </Svg>
);
