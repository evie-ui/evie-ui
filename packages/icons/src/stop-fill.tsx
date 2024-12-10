import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStopFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M215-309v-342q0-40.213 27.1-67.606Q269.2-746 309-746h342q40.213 0 67.606 27.394Q746-691.213 746-651v342q0 39.8-27.394 66.9Q691.213-215 651-215H309q-39.8 0-66.9-27.1Q215-269.2 215-309" />
  </Svg>
);
