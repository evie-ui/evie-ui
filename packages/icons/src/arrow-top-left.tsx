import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowTopLeft = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m315-558 111 111q14 14.364 14.5 34.182t-14.187 33.938q-14.295 14.12-33.622 14.5Q373.364-364 359-378L168-569q-6.909-7.167-10.955-16.328Q153-594.489 153-603.244q0-8.756 4.045-17.706Q161.091-629.9 168-637l193-195q14.467-14 33.733-14Q414-846 428-831.714q14 14.285 14.5 33Q443-780 429-766L316-652h375q40.213 0 67.606 27.625Q786-596.75 786-558v376q0 19.75-14.263 33.375t-34 13.625Q718-135 704.5-148.625 691-162.25 691-182v-376z" />
  </Svg>
);
