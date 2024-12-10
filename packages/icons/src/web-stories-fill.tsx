import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWebStoriesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M700-146v-668q38 0 60.5 21t22.5 61v503q0 39.788-22.756 61.394Q737.487-146 700-146M140-63q-39.025 0-66.513-27.487Q46-117.975 46-157v-646q0-39.025 27.487-66.512Q100.975-897 140-897h366q39.025 0 66.512 27.488Q600-842.025 600-803v646q0 39.025-27.488 66.513Q545.025-63 506-63zm743-168v-499q25 0 38.5 12.333Q935-705.333 935-678v396q0 27.583-13.5 39.292Q908-231 883-231" />
  </Svg>
);