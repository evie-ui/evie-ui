import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHomeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M135-189v-377q0-22.25 9.375-42T172-641l251-189q24.68-19 56.84-19Q512-849 537-830l251 189q18.25 13.25 28.125 33T826-566v377q0 39.75-27.625 66.875T731-95H613q-19.75 0-33.375-13.625T566-142v-217q0-19.75-13.625-33.375T519-406h-78q-19.75 0-33.375 13.625T394-359v217q0 19.75-13.625 33.375T347-95H229q-39.75 0-66.875-27.125T135-189" />
  </Svg>
);
