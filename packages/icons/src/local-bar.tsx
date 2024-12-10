import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLocalBar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-197v-208L116-747q-9-9-12.5-21.5T100-794q0-29 19.5-50.5T169-866h623q29 0 49 21.5t20 50.5q0 13-4 25.5T844-747L527-405v208h163q20 0 33.5 13.5T737-150q0 20-13.5 33.5T690-103H270q-20 0-33.5-13.5T223-150q0-20 13.5-33.5T270-197zM294-695h372l75-72H219zm186 202 131-142H349zm0 0" />
  </Svg>
);
