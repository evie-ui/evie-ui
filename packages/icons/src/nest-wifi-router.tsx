import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNestWifiRouter = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M352.103-95q-106.724 0-181.913-75.19Q95-245.379 95-352.103v-256.138q0-106.725 75.19-182.242Q245.379-866 352.103-866h256.138q106.725 0 182.242 75.517T866-608.241v256.138q0 106.724-75.517 181.913Q714.966-95 608.241-95zM189-389h582v-220q0-67-47.506-114.5Q675.987-771 608-771H351q-67 0-114.5 47.5T189-609zm6 83q14 55 59.423 86T351-189h257q52.154 0 97.577-31Q751-251 765-306zm285-83" />
  </Svg>
);
