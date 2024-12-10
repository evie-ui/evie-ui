import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScatterPlotFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M721-66q-73 0-123-50.5T548-240q0-72 50-122t123-50q72 0 122.5 50T894-240q0 73-50.5 123.5T721-66M240-200q-73 0-123.5-50T66-373q0-72 50.5-122.5T240-546q72 0 122 50.5T412-373q0 73-50 123t-122 50m214-371q-72 0-122.5-50T281-743q0-73 50.5-123.5T454-917q73 0 123.5 50.5T628-743q0 72-50.5 122T454-571" />
  </Svg>
);
