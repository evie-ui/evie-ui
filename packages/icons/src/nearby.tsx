import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNearby = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M446-312 312-446q-14-14.364-14-34.182T312-514l134-134q14.364-14 34.182-14T514-648l134 134q14 14.364 14 34.182T648-446L514-312q-14.364 14-34.182 14T446-312M546-93q-15 14-31.5 21T480-65q-17 0-34-6.5T415-92L92-415q-14-14-21-30.5T64-480q0-18 7-35t21-31l325-324q12-13 29-19.5t34-6.5q17 0 34 6.5t30 19.5l324 324q14 14 21 30.833 7 16.834 7 35.167 0 18.25-7.696 35-7.695 16.75-21.304 30zm-66-88 300-299-300-300-299 300z" />
  </Svg>
);