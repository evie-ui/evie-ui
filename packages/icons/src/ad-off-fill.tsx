import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAdOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.025 0-66.513-27.487Q95-149.975 95-189v-583l-19-20q-11-10-10.5-25.067.5-15.066 10.457-24.89Q87-853 101.5-853t25.5 11l726 726q10 11.455 10.5 25.727Q864-76 853-65q-10 11-25.5 10.5T802-65l-30-30zm0-94h489L189-679zm677 0-86-85v-414H367L189-866h582q39.438 0 67.219 27.781Q866-810.438 866-771z" />
  </Svg>
);
