import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBrowse = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-425v-357q0-33.9 24.756-58.95Q144.512-866 178-866h278v441zm409-441h278q33.9 0 58.95 25.05Q866-815.9 866-782v198H504zm0 771v-440h362v357q0 33.488-25.05 58.244T782-95zM95-376h361v281H178q-33.488 0-58.244-24.756T95-178zm83-132h195v-274H178zm409-158h195v-116H587zm0 214v274h195v-274zM178-294v116h195v-116z" />
  </Svg>
);
