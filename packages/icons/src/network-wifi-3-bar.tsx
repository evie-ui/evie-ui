import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNetworkWifi3Bar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M410-145 55-537q-11-11-16-26t-5-29q0-18 7-34.5T62-656q94-73 195.5-115T480-813q121 0 222.5 42T898-656q14 13 21 29.5t7 34.5q0 14-5 29t-15 26L551-145q-15 17-33 24.5t-38 7.5q-20 0-38-7.5T410-145M247-459q53-42 111.5-63.5T480-544q63 0 122 21.5T714-459l115-129q-84-65-170-97.5T480-718q-93 0-179 32.5T132-588z" />
  </Svg>
);
