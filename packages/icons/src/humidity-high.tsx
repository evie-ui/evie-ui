import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHumidityHigh = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.77-75Q337-75 236-173.281q-101-98.282-101-240.381 0-69.48 26.5-132.109Q188-608.401 237-656.5L480-896l243 239.5q49 48.099 76 110.79 27 62.692 27 131.71 0 142.241-101.73 240.62Q622.541-75 479.77-75" />
  </Svg>
);
