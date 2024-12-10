import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTornado = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M178-855h604q55.25 0 82.625 47T864-713L562-191q-28.4 48-82.2 48-53.8 0-81.8-48L96-713q-28-48-.625-95T178-855m0 94 66 114h472l66-114zm120 208 62 106h240l62-106zm116 200 66 114 66-114z" />
  </Svg>
);
