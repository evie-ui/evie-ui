import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSpellcheck = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m563-181 200-200q13-13 31-13t32 13q13 14 12.5 32T825-318L629-122q-14 14-31 20.5T563-95q-18 0-35-6.5T497-122l-73-74q-14-13-14-30.5t14-31.5q13-13 31-13t32 13zM240-450l-43 114q-4 11-14 17.5t-21 6.5q-21 0-32.5-16.5T125-365l173-447q5-13 15-20t24-7h34q14 0 24 7t16 20l170 442q8 21-5 39.5T541-312q-14 0-25-7.5T500-340l-42-110zm21-67h177l-86-238h-5z" />
  </Svg>
);
