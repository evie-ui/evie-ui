import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBottomAppBar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-226v132h582v-132H554q-15 16-34.348 23t-39.817 7q-20.469 0-39.652-7T406-321zm291-41q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9m-291-30h190q0-41 29.765-71.5 29.764-30.5 71-30.5Q521-494 551-463.5t30 71.5h190v-379H189zm0 203h582z" />
  </Svg>
);
