import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFitnessCenterFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M273-622 160-509q-13 13-29.5 12.5T101-510q-12-12-12-29t12-30l26-26-22-23q-14-14-14-33.5t14-33.5l53-53-8-7q-15-14-15-33.5t14-32.5q13-14 32.5-14t33.5 13l8 9 52-52q14-14 33.5-14t34.5 14l22 22 27-27q13-12 30-12t29 12q13 14 13 30.5T451-800L339-688l349 349 112-112q13-13 30-13t30 13q12 12 12 29.5T860-392l-27 27 22 22q14 15 14 34.5T855-275l-54 54 9 7q14 14 14 33.5T810-148q-14 14-33 14t-33-15l-7-8-52 52q-14 14-33.5 14T618-105l-23-22-27 27q-13 12-29.5 11.5T510-101q-14-13-14-29.5t14-30.5l112-112z" />
  </Svg>
);