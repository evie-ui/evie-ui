import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHumidityMidFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-75q-143 0-244-98.209T135-414q0-69.142 26.5-131.771Q188-608.401 237-656.5L480-896l243 239.5q49 48.099 76 110.729Q826-483.142 826-414q0 142.582-101.5 240.791T480-75M229-414h502q0-48-19-93t-53-79L480-763 301-586q-34 34-53 79.042-19 45.041-19 92.958" />
  </Svg>
);
