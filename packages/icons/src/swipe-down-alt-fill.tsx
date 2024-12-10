import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSwipeDownAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-73q-9 0-17.5-4T447-88L317-218q-15-14-15-33t14-34q14-14 33.5-14t33.5 14l50 50v-160q-69-19-119.5-73.5T263-608q0-90 63.5-153.5T480-825q90 0 153.5 63.5T697-608q0 85-50.5 139.5T527-395v160l50-49q15-14 33.5-14.5T643-285q15 15 15 34t-15 33L513-88q-7 7-15.5 11T480-73" />
  </Svg>
);
