import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWebStories = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M700-146v-668q38 0 60.5 21t22.5 61v503q0 39.788-22.756 61.394Q737.487-146 700-146M140-63q-38.775 0-66.388-27.612Q46-118.225 46-157v-646q0-38.775 27.612-66.387Q101.225-897 140-897h366q38.775 0 66.387 27.613Q600-841.775 600-803v646q0 38.775-27.613 66.388Q544.775-63 506-63zm743-168v-499q25 0 38.5 12.333Q935-705.333 935-678v396q0 27.583-13.5 39.292Q908-231 883-231m-743 77h366v-649H140zm0-649v649z" />
  </Svg>
);
