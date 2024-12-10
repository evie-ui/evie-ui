import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgExposureZero = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-177q-110 0-176.5-86.302T237-480q0-133 66.5-218T480-783q110 0 176.5 86.302T723-480q0 130.396-66.5 216.698Q590-177 480-177m0-92q72.5 0 108.75-63.5T625-480q0-84-36.25-147.5T480-691q-72.5 0-108.75 63.5T335-480q0 84 36.25 147.5T480-269" />
  </Svg>
);
