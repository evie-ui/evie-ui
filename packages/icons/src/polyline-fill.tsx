import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPolylineFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M609-148v-20L319-313H180q-39.8 0-66.9-27.625Q86-368.25 86-407v-77q0-40.213 27.1-67.606Q140.2-579 180-579h126l103-114.5V-820q0-40.213 27.625-67.606Q464.25-915 503-915h77q40.213 0 67.606 27.394Q675-860.213 675-820v77q0 38.75-27.394 66.375Q620.213-649 580-649H479.16L351-504v115.556L617-256q7-28 31.164-47.5T703-323h77q40.213 0 67.606 27.625Q875-267.75 875-229v78q0 38.75-27.394 66.375Q820.213-57 780-57h-80q-38.213 0-64.606-26.394Q609-109.787 609-148" />
  </Svg>
);
