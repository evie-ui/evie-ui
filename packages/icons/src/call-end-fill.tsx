import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCallEndFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-651q135 0 244.5 47T920-463q15 17 15 43t-15 42l-94 93q-11 12-35 12.5T751-284l-104-77q-10-7-14.5-17t-4.5-21v-146q-38-14-74.5-19t-73.5-5q-37 0-73.5 5T332-545v146q0 11-4.5 21T314-361l-105 77q-16 12-39 12t-36-13l-93-93q-16-16-16-42t16-43q87-93 195.5-140.5T480-651" />
  </Svg>
);
