import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAccountTreeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M598-182v-35h-71q-38.75 0-66.375-27.125T433-311v-338h-70v40q0 36.75-26.625 63.375T273-519H134q-39.75 0-66.875-27.625T40-614v-160q0-39.75 27.125-67.375T134-869h139q36.75 0 63.375 26.625T363-779v35h235v-35q0-36.75 26.625-63.375T688-869h138q39.75 0 67.375 27.625T921-774v160q0 39.75-27.625 67.375T826-519H688q-36.75 0-63.375-26.625T598-609v-40h-71v338h71v-40q0-36.75 26.625-63.375T688-441h138q39.75 0 67.375 27.625T921-347v161q0 39.75-27.625 66.875T826-92H688q-36.75 0-63.375-26.125T598-182" />
  </Svg>
);