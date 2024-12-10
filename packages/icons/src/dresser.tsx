import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDresser = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M132-92v-682q0-40.213 27.1-67.606Q186.2-869 226-869h508q40.213 0 67.606 27.394Q829-814.213 829-774v682h-95v-80H226v80zm94-439h216v-243H226zm293-160h215v-83H519zm0 160h215v-83H519zM393-313h174v-77H393zM226-454v205h508v-205zm0 0v205z" />
  </Svg>
);
