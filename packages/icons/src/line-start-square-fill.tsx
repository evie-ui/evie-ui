import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLineStartSquareFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M115-248q-19.75 0-33.375-13.625T68-295v-370q0-19.75 13.625-33.375T115-712h370q19.75 0 33.375 13.625T532-665v138h318q19.75 0 33.375 13.675Q897-499.649 897-479.825 897-460 883.375-446.5 869.75-433 850-433H532v138q0 19.75-13.625 33.375T485-248z" />
  </Svg>
);
