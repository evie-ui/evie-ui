import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgElevationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M776-89H161q-28 0-42-25.5t3-49.5l198-275q13-19 33-29.5t43-10.5h154l237-277q22-24 53-13t31 44v541q0 40-27.5 67.5T776-89M282-579 158-408q-12 16-30.5 19.5T94-396q-16-12-19.5-31.5T82-462l123-173q13-18 34-28.5t44-10.5h152l160-186q13-15 32.5-17t34.5 11q15 13 17 33t-11 35L508-612q-13 15-32 24t-41 9z" />
  </Svg>
);
