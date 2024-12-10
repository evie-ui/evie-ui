import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHeartCheckFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M892-544q15 14 15 33.5T892-477L752-335q-15 13-34.5 13T684-335l-56-58q-14-14-14-33t14-33q14-15 33-15t33 15l24 23 108-108q14-14 33-14t33 14M407-115l-52-47q-103-92-169.5-159T81-440.5q-38-52.5-52.5-98T14-633q0-101 67.5-172.5T249-877q56 0 104 24.5t86 71.5q44-49 90-72.5T629-877q91 0 159 64t77 156q-30-20-58.5-30T746-697q-123 0-198 76t-75 181q0 69 31.5 124.5T593-224q-24 22-46.5 42T498-138l-27 23q-13 13-31.5 13T407-115" />
  </Svg>
);
