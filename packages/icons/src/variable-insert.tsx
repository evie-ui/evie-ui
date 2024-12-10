import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVariableInsert = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-302v-356q0-19.625 13.625-33.812Q122.25-706 142-706h676q19.625 0 33.812 14.188Q866-677.625 866-658v161h-95v-114H189v262h399v94H142q-19.75 0-33.375-13.625T95-302m94-47v-262zm527 28v83q0 14.325-9.974 24.163-9.973 9.837-24.5 9.837-14.526 0-24.026-9.837Q648-223.675 648-238v-151q0-19.625 13.625-33.812Q675.25-437 695-437h152q13.75 0 23.875 9.974Q881-417.053 881-402.526 881-388 870.875-378.5T847-369h-84l125.812 126.811Q899-232.2 899-219.1q0 13.1-10.053 23.6-10.052 10.5-23.5 10Q852-186 842-196z" />
  </Svg>
);
