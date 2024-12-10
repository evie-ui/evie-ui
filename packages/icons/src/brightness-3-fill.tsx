import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBrightness3Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M662-777q57 62 89 135t32 159q0 83-32 160t-89 140q-55 61-127 94T374-56q-19-1-31.5-15.5T330-105q0-14 8-27t21-19q72-63 107.5-150T502-483q0-97-35.5-180T359-809q-13-6-21-19t-8-28q0-19 12.5-33.5T374-906q89 0 161 34t127 95" />
  </Svg>
);
