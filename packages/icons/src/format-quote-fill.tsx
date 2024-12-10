import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFormatQuoteFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m247-282 64-109q-5 1-11 1.5t-11 .5q-68-6-112.5-55.5T132-560q0-73.35 50.825-123.675T307-734q72 0 122.5 50.325T480-560q0 21-5.25 41.5T460-480L322-238q-6.348 11.1-16.174 16.05Q296-217 284-217q-24.5 0-37.25-21.5T247-282m387 1 64-110q-5 1-11 1.5t-11 .5q-68-6-112-55.5T520-560q0-73.35 50.325-123.675T694-734q72 0 123 50.325T868-560q0 21-5.25 41.5T848-480L709-238q-6.348 11.1-16.174 16.05Q683-217 671-217q-24.5 0-36.75-21t-.25-43" />
  </Svg>
);
