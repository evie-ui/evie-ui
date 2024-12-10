import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAreaChart = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m552-814 137 108h82q40.213 0 67.606 27.394Q866-651.213 866-611v476H95v-501q0-28.979 25.5-42.489Q146-692 170-674l104 78 143-200q23-33.368 63.5-38.684Q521-840 552-814M189-541v170l134 106 160-221 288 226v-351H655L494-741 296-462z" />
  </Svg>
);
