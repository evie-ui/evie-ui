import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAdUnitsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M357-669q-13 0-21.5-8.5T327-699q0-13 8.5-21.5T357-729h246q13 0 21.5 8.5T633-699q0 13-8.5 21.5T603-669zM271-17q-39.05 0-66.525-27.475Q177-71.95 177-111v-738q0-39.05 27.475-66.525Q231.95-943 271-943h418q39.05 0 66.525 27.475Q783-888.05 783-849v738q0 39.05-27.475 66.525Q728.05-17 689-17zm0-184h418v-558H271z" />
  </Svg>
);