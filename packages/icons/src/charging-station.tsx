import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgChargingStation = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M460-440h-41q-12.87 0-18.935-11.5Q394-463 399-475l79-185q3-8 12.5-5.545Q500-663.091 500-654v134h41q12.87 0 18.935 11.5Q566-497 562-485l-80 185q-3 8-12.5 5.682Q460-296.636 460-307zM271-17q-39.05 0-66.525-27.475Q177-71.95 177-111v-738q0-39.05 27.475-66.525Q231.95-943 271-943h418q39.05 0 66.525 27.475Q783-888.05 783-849v738q0 39.05-27.475 66.525Q728.05-17 689-17zm0-124v30h418v-30zm0-60h418v-558H271zm0-618h418v-30H271zm0 0v-30zm0 678v30z" />
  </Svg>
);
