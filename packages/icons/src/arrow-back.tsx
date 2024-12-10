import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgArrowBack = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m315-433 198 198q14 14.091 14.5 33.545.5 19.455-13.5 33.89Q500-153 480.182-153.5 460.364-154 446-168L168-446q-6.909-7.167-10.955-16.194Q153-471.222 153-480.111q0-8.889 4.045-17.839Q161.091-506.9 168-514l279-279q15.5-14 34.25-14T514-793q14 15 14 33.933 0 18.934-14 33.067L315-527h463q19.875 0 33.938 13.5Q826-500 826-480t-14.062 33.5Q797.875-433 778-433z" />
  </Svg>
);
