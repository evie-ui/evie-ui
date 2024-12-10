import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBottomPanelCloseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m514-559 85-85q11-11 4.958-26-6.041-15-21.958-15H378q-15.917 0-21.958 15Q350-655 361-644l85 85q14.364 15 34.182 15T514-559m257-307q40.213 0 67.606 27.394Q866-811.213 866-771v582q0 39.8-27.394 66.9Q811.213-95 771-95H189q-39.8 0-66.9-27.1Q95-149.2 95-189v-582q0-40.213 27.1-67.606Q149.2-866 189-866zm0 450v-355H189v355z" />
  </Svg>
);
