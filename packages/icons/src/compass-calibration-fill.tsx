import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCompassCalibrationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-60q-87 0-148-61t-61-149q0-87 61-148t148-61q87 0 148 61t61 148q0 88-61 149T480-60m0-525q-53 0-102.5 19T285-516q-12 9-26 8.5T234-519L91-661q-15-16-14-36.5T94-731q82-68 180-108t206-40q108 0 206 40t180 108q16 13 17 33.5T869-661L726-519q-11 11-25 11.5t-26-8.5q-43-31-92.5-50T480-585" />
  </Svg>
);
