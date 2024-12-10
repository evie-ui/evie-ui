import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStreamAppsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m640-360-39 39q-11 11-26 4.958-15-6.041-15-20.958v-256q0-19.75 13.625-33.375T607-640h266q19.75 0 33.375 13.625T920-593v186q0 19.75-13.625 33.375T873-360zM271-17q-38.75 0-66.375-27.625T177-111v-738q0-38.75 27.625-66.375T271-943h418q38.75 0 66.375 27.625T783-849v135h-94v-45H271v558h418v-45h94v135q0 38.75-27.625 66.375T689-17z" />
  </Svg>
);
