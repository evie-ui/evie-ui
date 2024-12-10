import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlexDirectionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M55-182v-211q0-20 13.5-33.5T102-440h295q20 0 33.5 13.5T444-393v211q0 20-13.5 33.5T397-135H102q-20 0-33.5-13.5T55-182m0-385v-211q0-20 13.5-34t33.5-14h295q20 0 33.5 14t13.5 34v211q0 20-13.5 33.5T397-520H102q-20 0-33.5-13.5T55-567m94-48h200v-116H149zm591 462q-9 0-18-3.5T706-167L560-309q-16-15-15-36t17-36q15-13 33.5-12t33.5 15l64 62v-462q0-20 13.5-34t33.5-14q20 0 33.5 14t13.5 34v462l64-63q14-13 33-13t33 14q15 14 15 33t-15 33L773-168q-7 7-15.5 11t-17.5 4" />
  </Svg>
);
