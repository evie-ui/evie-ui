import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAodTabletFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M111-135q-39 0-66.5-27.5T17-229v-502q0-39 27.5-67t66.5-28h738q39 0 66.5 28t27.5 67v502q0 39-27.5 66.5T849-135zm90-94h558v-502H201zm139-264q-15 0-26-11t-11-26q0-15 11-26t26-11h280q15 0 26 11t11 26q0 15-11 26t-26 11zm40 120q-15 0-26-11t-11-26q0-15 11-26t26-11h200q15 0 26 11t11 26q0 15-11 26t-26 11z" />
  </Svg>
);
