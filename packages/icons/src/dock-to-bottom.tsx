import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDockToBottom = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.8 0-66.9-27.1Q95-149.2 95-189v-582q0-40.213 27.1-67.606Q149.2-866 189-866h582q40.213 0 67.606 27.394Q866-811.213 866-771v582q0 39.8-27.394 66.9Q811.213-95 771-95zm0-226v132h582v-132zm0-95h582v-355H189zm0 95v132z" />
  </Svg>
);
