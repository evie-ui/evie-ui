import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRavenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-761q-13 0-21.5 8.5T199-731q0 13 8.5 21.5T229-701q13 0 21-8.5t8-21.5q0-13-8-21.5t-21-8.5m155 572-37 89q-7 18-25 25t-36 0q-19-7-26.5-25.5t.5-37.5l29-69q-105-34-169.5-122.5T55-530v-204q0-72 50.5-122T229-906q17 0 33.5 3t32.5 10l229 94q14 6 14 22.5T523-754l-122 45v57l324 212H397q-37 0-65-22.5T304-521q-3-16-15-27t-30-11q-20 0-33.5 13.5T212-512q0 31 12.5 58.5T258-405q26 27 61.5 43t77.5 16h471l28 18 32 172q4 21-9.5 36T885-105h-28q-11 0-21-5t-16-15l-38-64H571v88q0 20-13.5 33T524-55q-21 0-34-13.5T477-102v-87z" />
  </Svg>
);
