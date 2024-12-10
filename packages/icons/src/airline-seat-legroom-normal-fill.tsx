import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAirlineSeatLegroomNormalFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M660-410H378q-52.875 0-90.438-37.562Q250-485.125 250-538v-325h255v262h176q38.875 0 65.938 26.562Q774-547.875 774-509v291h61q24 0 40 15.5t16 39.5q0 24-16 39t-40 15H702q-17.75 0-29.875-12.125T660-151zM519-257H191q-38.75 0-66.375-27.625T97-351v-471q0-17.75 12.175-29.375 12.176-11.625 30-11.625Q157-863 168.5-851.375T180-822v482h339q17.75 0 29.375 11.675Q560-316.649 560-298.825 560-281 548.375-269T519-257" />
  </Svg>
);