import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHallway = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-34q-39.05 0-66.525-27.769Q95-89.537 95-129v-581q0-39.463 27.475-67.231Q149.95-805 189-805h134l124-124q14.727-14 34.364-14Q501-943 515-929l125 124h131q39.463 0 67.231 27.769Q866-749.463 866-710v581q0 39.463-27.769 67.231Q810.463-34 771-34zm0-95h582v-581H189zm258-139-73-102q-8-10-20-10t-19 10l-85 114q-9 12.75-2.375 25.375T269-218h425q15 0 21-12.625T713-256L598-415q-7-10-19-10t-19 9zm-39-537h147l-74-73zM189-129v-581z" />
  </Svg>
);
