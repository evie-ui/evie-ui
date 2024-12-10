import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStat2Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-388 315-222q-14 14-33 13.5T249-223q-14-14-14-33t14-33l165-165q28-27 66-27t66 27l165 165q14 14 14 33t-14 33q-14 15-33 15t-34-15zm0-276L315-498q-14 14-33 13.5T249-498q-14-14-14-33t14-33l165-165q28-28 66-28t66 28l165 165q14 14 14 33t-14 33q-14 14-33 14t-33-14z" />
  </Svg>
);
