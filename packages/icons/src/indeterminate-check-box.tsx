import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgIndeterminateCheckBox = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M291-441h379q17.425 0 29.213-11.777Q711-464.555 711-481.965q0-17.41-11.787-29.223Q687.425-523 670-523H291q-17.425 0-29.212 11.777Q250-499.445 250-482.035q0 17.41 11.788 29.223Q273.575-441 291-441M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
