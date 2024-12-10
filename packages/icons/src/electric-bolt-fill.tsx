import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgElectricBoltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m420-352-256-31q-30-4-39.5-32.5T137-465l469-432q5-4 12-7t20-3q21 0 32 18t1 36L536-603l257 29q30 4 39.5 33T820-492L354-64q-5 5-12 7.5T322-54q-21 0-32.5-17.5T288-107z" />
  </Svg>
);
