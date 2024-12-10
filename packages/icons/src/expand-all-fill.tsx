import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgExpandAllFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-191 163-162q13-14 33.5-14t34.5 14q13 13 13 33t-13 34L546-122q-28 28-66 28t-66-28L250-286q-14-14-14-34t13-33q14-14 34-14t34 14zm0-578L317-606q-14 14-34.5 14T249-606q-14-14-13.5-34t13.5-33l165-165q28-28 66-28t66 28l165 165q13 13 13.5 33T712-606q-14 14-34.5 14T644-606z" />
  </Svg>
);
