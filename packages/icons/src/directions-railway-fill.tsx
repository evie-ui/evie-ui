import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDirectionsRailwayFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M135-356v-369q0-95 83.5-140T480-910q184 0 265 43.5T826-725v369q0 65-40.5 116T686-179l75 51q14 9 9 25.5T747-86H213q-18 0-23-16.5t9-25.5l76-51q-60-10-100-61t-40-116m94-185h502v-155H229zm251.059 226Q503-315 519-331.059q16-16.059 16-39T518.941-409q-16.059-16-39-16T441-408.941q-16 16.059-16 39T441.059-331q16.059 16 39 16" />
  </Svg>
);
