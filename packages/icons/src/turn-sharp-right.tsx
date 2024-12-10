import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTurnSharpRight = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M279.825-95Q260-95 246.5-108.625 233-122.25 233-142v-211q0-38.775 27.612-66.388Q288.225-447 327-447h306v-239l-57 57q-14 15-33 15t-33-14.5q-14-14.5-14-33.233 0-18.734 14-33.267l136-136q14.727-14 34.364-14Q700-845 714-831l136 136q14 14.533 14 33.267Q864-643 850-628.5 836-614 817-614t-33-15l-57-57v239q0 38.775-27.613 66.388Q671.775-353 633-353H327v211q0 19.75-13.675 33.375Q299.649-95 279.825-95" />
  </Svg>
);
