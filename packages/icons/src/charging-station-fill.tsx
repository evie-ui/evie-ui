import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgChargingStationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M460-440h-41q-13 0-19-11.5t-1-23.5l79-185q3-8 12.5-5.5T500-654v134h41q13 0 19 11.5t2 23.5l-80 185q-3 8-12.5 5.5T460-307zM271-17q-39 0-66.5-27.5T177-111v-738q0-39 27.5-66.5T271-943h418q39 0 66.5 27.5T783-849v738q0 39-27.5 66.5T689-17zm0-184h418v-558H271z" />
  </Svg>
);
