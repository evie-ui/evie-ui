import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewAgenda = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-504q-39.05 0-66.525-27.769Q95-559.537 95-599v-187q0-39.463 27.475-67.231Q149.95-881 189-881h582q39.463 0 67.231 27.769Q866-825.463 866-786v187q0 39.463-27.769 67.231Q810.463-504 771-504zm0-95h582v-187H189zm0 519q-39.05 0-66.525-27.475Q95-134.95 95-174v-188q0-38 27.475-66T189-456h582q39.463 0 67.231 28Q866-400 866-362v188q0 39.05-27.769 66.525Q810.463-80 771-80zm0-94h582v-188H189zm0-612v187zm0 424v188z" />
  </Svg>
);
