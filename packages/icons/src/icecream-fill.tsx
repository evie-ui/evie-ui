import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgIcecreamFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-569q0-53 33.5-104t91.5-65q22-94 95.5-149.5T480-943q92 0 164 55t96 149q58 14 92 65.5T866-569q0 81-61 132t-134 40L520-100q-7 13-18.5 20T478-73q-13 0-24.5-7T436-100L290-397q-78 11-136.5-39.5T95-569m383 360 101-197-6-6q-22 10-46.5 14t-43.5 4q-24 0-50.5-4T388-412l-6 5z" />
  </Svg>
);
