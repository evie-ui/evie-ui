import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSummarize = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M309-615q15.4 0 25.7-10.3Q345-635.6 345-651q0-15.4-10.3-25.7Q324.4-687 309-687q-15.4 0-25.7 10.3Q273-666.4 273-651q0 15.4 10.3 25.7Q293.6-615 309-615m0 171q15.4 0 25.7-10.3Q345-464.6 345-480q0-15.4-10.3-25.7Q324.4-516 309-516q-15.4 0-25.7 10.3Q273-495.4 273-480q0 15.4 10.3 25.7Q293.6-444 309-444m0 171q15.4 0 25.7-10.3Q345-293.6 345-309q0-15.4-10.3-25.7Q324.4-345 309-345q-15.4 0-25.7 10.3Q273-324.4 273-309q0 15.4 10.3 25.7Q293.6-273 309-273M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h414q19.2 0 36.6 8 17.4 8 31.4 21l166 166q13 14 21 31.4t8 36.6v414q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-399H635q-19.75 0-33.375-13.625T588-635v-136H189zm0-582v183.429zv582z" />
  </Svg>
);
