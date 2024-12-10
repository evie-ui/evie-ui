import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgForestFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M543-102v-60h138v60q0 20-13.5 33.5T634-55h-44q-20 0-33.5-13.5T543-102m-263 0v-102H32q-29 0-43-25t3-49l142-200H97q-20 0-29-16.5t2-33.5l240-340q7-10 17-15.5t22-5.5q11 0 21.5 5.5T388-868l239 340q11 17 2 33.5T600-478h-36l142 200q17 24 3 49t-43 25H418v102q0 20-13.5 33.5T371-55h-44q-20 0-33.5-13.5T280-102m528-102L644-436h36q20 0 28.5-17.5T706-487L506-775l66-93q7-10 17.5-15.5T611-889q12 0 22 5.5t18 15.5l239 340q11 17 2 33.5T864-478h-36l141 200q16 24 2 49t-42 25z" />
  </Svg>
);
