import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDarkMode = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481-109q-159.322 0-265.661-105.839T109-480q0-123 63-216.5T359-832q29-9 49.5-7t34 13q12.5 11 17 29t-.5 45q1 20-.5 36.578Q457-698.844 457-684q0 95.417 67.083 162.208Q591.167-455 687-455q16 0 32.5.5t34.5.5q28-4 46.5.5t28.026 17.5Q838-423 839-403t-8 49q-42 109-132 177t-218 68m0-94q89 0 157.5-52.5T728-378q-17 8-38 11.5t-41 1.5q-112-13-191-89.5T365-649q0-15 2.5-35t12.5-47q-76 29-126 99.5T204-480q0 116.157 80.421 196.579Q364.843-203 481-203m-14-264" />
  </Svg>
);
