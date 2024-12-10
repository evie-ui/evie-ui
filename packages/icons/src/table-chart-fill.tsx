import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTableChartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-637v-134q0-39.188 27.612-67.094Q150.225-866 189-866h622q39.188 0 67.094 27.906Q906-810.188 906-771v134zm239 60v481H189q-38.775 0-66.388-27.612Q95-151.225 95-190v-387zm332 0h240v387q0 38.775-27.906 66.388Q850.188-96 811-96H666zm-60 0v481H394v-481z" />
  </Svg>
);
