import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStat1Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-528 315-363q-14 14-33 14t-33-14q-14-14-14-33t14-33l197-197q7-7 16-11t18-4q9 0 18 4t16 11l197 197q14 14 14 33.5T711-363q-14 14-33 14t-33-14z" />
  </Svg>
);
