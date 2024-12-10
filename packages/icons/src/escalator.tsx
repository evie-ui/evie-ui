import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEscalator = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M297-261h115l188-339h63q20.833 0 35.417-14.5Q713-629 713-650t-14.583-35.5Q683.833-700 663-700H548L360-361h-63q-20 0-35 14.583-15 14.584-15 35.417 0 21 15 35.5t35 14.5M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
