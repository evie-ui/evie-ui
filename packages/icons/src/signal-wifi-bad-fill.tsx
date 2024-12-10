import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSignalWifiBadFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m749-153-51 51q-14 13-33 13t-33-14q-15-14-15-33t15-34l50-50-51-51q-14-15-14-33.5t15-33.5q15-14 33.5-14t33.5 14l50 51 51-51q15-14 34-13.5t33 14.5q14 14 13.5 33T867-271l-51 51 51 51q13 14 13 33t-14 33q-14 14-33 14t-33-13zM453-94 55-537q-11-11-16-26t-5-29q0-18 7-34.5T62-656q94-73 195.5-115T480-813q121 0 222.5 42T898-656q14 13 21 29.5t7 34.5q0 14-5 29t-15 26l-91 95q-16-5-32-8t-34-3q-97 0-165 68t-68 165q0 26 6.5 49t17.5 44l-33 33q-11 13-27 13t-27-13" />
  </Svg>
);
