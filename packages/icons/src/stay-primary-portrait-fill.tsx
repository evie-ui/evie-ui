import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStayPrimaryPortraitFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.018-300Q466-300 456.5-309.482q-9.5-9.483-9.5-23.5Q447-346 456.482-356q9.483-10 23.5-10 14.018 0 23.518 9.982 9.5 9.983 9.5 23 0 14.018-9.482 23.518-9.483 9.5-23.5 9.5m-.193-83Q467-383 458.5-391.529t-8.5-21.138v-206.666q0-12.609 8.675-21.138 8.676-8.529 21.5-8.529 12.825 0 21.325 8.529t8.5 21.138v206.666q0 12.609-8.675 21.138-8.676 8.529-21.5 8.529M271-17q-39.05 0-66.525-27.475Q177-71.95 177-111v-738q0-39.05 27.475-66.525Q231.95-943 271-943h418q39.05 0 66.525 27.475Q783-888.05 783-849v738q0 39.05-27.475 66.525Q728.05-17 689-17zm0-184h418v-558H271z" />
  </Svg>
);
