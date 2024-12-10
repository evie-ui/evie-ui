import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDishwasher = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-560v380h582v-380zm0-60h582v-151H189zm290.911 353Q451-267 430.5-287.562 410-308.125 410-337q0-14 4.5-28.5T428-397q7-14 15.371-26.303t17.606-25.606Q468.571-459 480.286-459q11.714 0 18.737 10.091 9.235 13.303 17.606 25.606Q525-411 531.55-397q9.45 17 13.95 31.5T550-337q0 28.875-20.589 49.438Q508.823-267 479.911-267M695.5-666q12.5 0 21.5-8.5t9-21q0-12.5-9-21.5t-21-9q-13 0-21.5 9t-8.5 21q0 13 8.5 21.5t21 8.5M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-525v-151z" />
  </Svg>
);
