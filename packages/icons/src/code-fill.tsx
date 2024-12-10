import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCodeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m180-483 164 164q14 15 13 33.5T341.5-252Q327-237 308-237.5T275-252L78-448q-6.91-7.167-10.954-16.194Q63-473.222 63-482.111q0-8.889 4.046-17.839Q71.09-508.9 78-516l200-200q14.4-14 33.7-14 19.3 0 33.3 14 14 14 14 33.8 0 19.8-14 34.2zm601 2L617-645q-15-15-14-33.5t15.5-33.5q14.5-15 33.5-14.5t33 14.5l197 196q6.909 7.167 10.955 16.194Q897-490.778 897-481.889q0 8.889-4.045 17.839Q888.909-455.1 882-448L682-248q-14.091 14-33.045 14Q630-234 616-249q-15-14.133-15-33.567Q601-302 616-316z" />
  </Svg>
);
