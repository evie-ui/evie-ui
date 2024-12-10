import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgModeHeatCoolFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M241-294q-60-32-96-91t-36-131q0-82 41-146.5T240-772q49-45 90-69l41-24v117q0 21 15 35t35 14q11 0 21-5t17-14l19-23q46 26 77.5 67.5T601-583L495-477q-5-8-10.5-15.5T472-507L360-618 250-507q-23 22-35 49.5T203-398q0 30 10 56t28 48m85-14q-28-10-45.5-34T263-398q0-19 7-37t20-31l70-68 71 69q7 8 12 15.5t8 16.5zM284-48l-66-66 610-611 67 67-143 142h143v95H656l-32 33 51 51h220v95H770l100 100-67 66-100-100v128h-94v-222l-52-51-33 34v239h-95v-145z" />
  </Svg>
);
