import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStat3 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-259 315-94q-14 15-33 14.5T249-94q-14-14-14-32.5t14-33.5l165-165q28-27 66-27t66 27l165 165q14 15 14 34t-14 32q-14 15-33 15t-33-15zm0-269L315-363q-14 14-33 14t-33-14q-14-14-14-33t14-33l165-165q28-27 66-27t66 27l165 165q14 14 14 33.5T711-363q-14 14-33 14t-33-14zm0-269L315-631q-14 14-33 13.5T249-631q-14-14-14-33t14-33l165-165q28-28 66-28t66 28l198 198-66 66z" />
  </Svg>
);
