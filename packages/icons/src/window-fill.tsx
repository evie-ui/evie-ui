import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWindowFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M510-450h356v261q0 39.8-27.394 66.9Q811.213-95 771-95H510zm0-60v-356h261q40.213 0 67.606 27.394Q866-811.213 866-771v261zm-60 0H95v-261q0-40.213 27.1-67.606Q149.2-866 189-866h261zm0 60v355H189q-39.8 0-66.9-27.1Q95-149.2 95-189v-261z" />
  </Svg>
);
