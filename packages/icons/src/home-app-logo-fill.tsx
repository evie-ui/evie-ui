import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHomeAppLogoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M154.8-90q-27.383 0-46.592-19.173Q89-128.346 89-155.735V-239l174-154v303zM305-90v-174h350v174zm392 0v-357L511-613l131-116 207 185q11 10 16.5 22.458Q871-509.083 871-495v339.853q0 27.144-19.25 46.146Q832.5-90 805.8-90zM89-297v-197.939Q89-509 94.5-522t16.5-22l325-289q9.778-8 20.963-12t22.903-4q11.717 0 22.926 4Q514-841 524-833l87 77z" />
  </Svg>
);
