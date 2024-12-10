import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgModeCoolOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M521-262v152q0 17-12 29t-29 12q-17 0-29-12t-12-29v-137L330-139q-12 13-28.5 12.5T273-139q-13-12-13-29t13-30l156-156-74-74-155 154q-12 12-28.5 11.5T143-275q-13-12-13.5-28.5T141-333l106-106H110q-17 0-29-12t-12-29q0-17 12-29t29-12h152L43-740q-11-10-10.5-25T44-791q10-10 24.5-10T94-791L810-75q11 11 11 25.5T810-24q-10 10-24.5 10T760-24zm35-217h-57l-19-19v-57L275-761q-13-12-12.5-28.5T275-818q12-13 29-13.5t30 11.5l105 106v-136q0-17 12-29t29-12q17 0 29 12t12 29v136l111-109q11-13 28-12.5t29 13.5q13 12 13 28.5T689-765L521-597v76h76l165-165q12-13 28.5-12t28.5 12q13 13 13 29.5T820-628L714-521h136q17 0 29 12t12 29q0 17-12 29t-29 12H714l108 110q6 6 9 13t3 14.5q0 7.5-3 15t-9 13.5q-12 13-29 13t-29-13z" />
  </Svg>
);
