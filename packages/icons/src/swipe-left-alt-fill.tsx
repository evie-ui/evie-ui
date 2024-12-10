import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSwipeLeftAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M608-263q-84 0-139-50.5T396-433H235l50 50q14 15 14 33.5T285-317q-14 15-33 15t-33-15L88-447q-7-7-10.5-15.5T74-480q0-9 3.5-17.5T88-513l131-130q14-15 33-15t33 14q14 14 14 33.5T285-577l-50 50h161q18-69 73-119.5T608-697q91 0 154.5 63.5T826-480q0 90-63.5 153.5T608-263" />
  </Svg>
);
