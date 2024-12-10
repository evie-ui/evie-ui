import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShelfPositionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-324v134q0 38.775 27.612 66.388Q150.225-96 189-96h622q39.188 0 67.094-27.612Q906-151.225 906-190v-134zm571-60h240v-387q0-39.188-27.906-67.094Q850.188-866 811-866H666zm-571 0h239v-482H189q-38.775 0-66.388 27.906Q95-810.188 95-771zm299 0h212v-482H394z" />
  </Svg>
);
