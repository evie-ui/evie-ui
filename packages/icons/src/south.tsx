import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSouth = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-73q-9 0-17.5-4T447-88L208-327q-15-14-15-33t15-33q13-14 32-14.5t34 14.5l159 160v-624q0-20 13.5-33.5T480-904q20 0 33.5 13.5T527-857v624l160-160q14-14 33-14t33 14q15 14 14.5 33T753-327L514-88q-7 7-16 11t-18 4" />
  </Svg>
);
