import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgIndeterminateCheckBoxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M291-441h379q17.3 0 29.15-11.789 11.85-11.79 11.85-29Q711-499 699.15-511T670-523H291q-17.3 0-29.15 11.789-11.85 11.79-11.85 29Q250-465 261.85-453T291-441M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);
