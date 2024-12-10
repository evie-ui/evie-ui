import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPerson2Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M392-495q-44 0-72.5-32.5T297-602l13-98q8-63 56.5-104T480-845q65 0 113.5 41T650-700l13 98q6 42-22.5 74.5T569-495zM135-216v-27q0-44 22.5-77.5T217-371q69-31 133.5-46.5T480-433q66 0 130 16t132 46q38 16 61 49.5t23 78.5v27q0 39-27.5 66.5T731-122H229q-40 0-67-27.5T135-216" />
  </Svg>
);