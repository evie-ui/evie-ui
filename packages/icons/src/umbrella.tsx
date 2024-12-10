import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUmbrella = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m527-271 117-330-54 9-63-32zm-94 0v-352l-63 32-54-11zM480-7q-25 0-44-12.5T409-56L200-648q-10-28 10-48.5t48-12.5l91 26 84-43v-131q0-50 33.5-83t84.5-33q52 0 86 33t34 83q0 21-14 34.5T623-809q-20 0-33.5-13.5T576-857q0-10-7-16.5t-18-6.5q-9 0-16.5 7t-7.5 16v130l85 44 90-26q28-8 48 13t11 48L551-56q-8 25-27 37T480-7" />
  </Svg>
);
