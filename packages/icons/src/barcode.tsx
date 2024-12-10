import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBarcode = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M17-187v-588h89v588zm126 0v-588h84v588zm127 0v-588h42v588zm126 0v-588h84v588zm126 0v-588h126v588zm169 0v-588h42v588zm126 0v-588h126v588z" />
  </Svg>
);
