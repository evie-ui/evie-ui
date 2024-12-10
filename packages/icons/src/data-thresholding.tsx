import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDataThresholding = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-38.775 0-66.388-27.612Q95-150.225 95-189v-582q0-39.188 27.612-67.094Q150.225-866 189-866h582q39.188 0 67.094 27.906Q866-810.188 866-771v582q0 38.775-27.906 66.388Q810.188-95 771-95zm505-94h77v-77zm-470 0h82l120-120h71L377-189h88l120-120h71L536-189h87l120-120h28v-462H189v546l84-84h71zm198-337L306-411q-11 10-25.1 10.5-14.1.5-24.9-10.5-11-11.511-11-25.256Q245-450 256-462l132-132q14.727-14 34.364-14Q442-608 456-594l56 57 142-143q11-10 25.5-10t25.5 11q10 11 10 24.622T705-629L546-470q-14.727 15-34.364 15Q492-455 478-470zM189-189v-582z" />
  </Svg>
);
