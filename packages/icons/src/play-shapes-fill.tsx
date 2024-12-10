import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPlayShapesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M103-518q-28 0-41-23.5t0-47.5l163-292q13-25 40.5-25t41.5 25l162 292q13 24 0 47.5T428-518zM268-72q-78 0-132-54T82-257q0-77 54-131t132-54q77 0 130.5 54T452-257q0 77-53.5 131T268-72m305 0q-20 0-33.5-13.5T526-119v-276q0-20 13.5-33.5T573-442h276q20 0 33.5 13.5T896-395v276q0 20-13.5 33.5T849-72zm72-665-85-83q-14-14-14-33.5t14-33.5q14-14 33-13.5t34 13.5l84 84 86-86q14-14 33-14t34 14q14 14 14 33.5T864-822l-86 85 86 86q14 14 14 33.5T864-584q-15 14-34 14t-33-14l-86-86-85 86q-15 14-34 14t-33-14q-14-14-14-33.5t14-33.5z" />
  </Svg>
);
