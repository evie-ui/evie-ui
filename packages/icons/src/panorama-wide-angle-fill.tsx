import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPanoramaWideAngleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.245-135Q383-135 287.5-144.5T99-181q-21.95-73.236-32.975-147.959Q55-403.682 55-479.841t11.025-151.322Q77.05-706.327 99-780q85-23 179.5-34.5T479.998-826q109.998 0 203.768 11.5T861-780q22 74 33.5 148.853Q906-556.294 906-480t-11.5 151.147Q883-254 861-181q-93 26-188.255 36t-192.5 10" />
  </Svg>
);
