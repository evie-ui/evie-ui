import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNearMe = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M380-394 95-504q-15-6-22.5-18.5T65-549q0-14 7.5-25.5T95-593l685-262q14-6 27.5-2.5T830-845q10 10 14 23.5t-2 27.5L579-109q-6 16-17.5 23.5T536-78q-15 0-27.5-7.5T490-109zm152 136 182-470-468 183 207 78zm-79-209" />
  </Svg>
);
