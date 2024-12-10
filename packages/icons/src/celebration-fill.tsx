import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCelebrationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m85-128 158-444q6-15 18.5-23t26.5-8q8 0 16.5 3t16.5 10l289 285q7 8 10 16.5t3 17.5q0 14-8 26t-23 18L145-68q-14 5-27 2T95-79q-9-9-11.5-22t1.5-27m859-536q-8 7-19.5 7t-19.5-7h1q-19-19-44.5-19.5T817-664L609-456q-10 9-23 8.5t-22-9.5q-9-9-9-22.5t9-22.5l204-204q36-36 92.5-36.5T954-707l-3-3q8 8 7 20.5T944-664M381-837q8-8 20.5-8t20.5 8l6 5q39 40 38.5 99T427-634l-8 8q-6 6-17 4t-28-21q-6-5-6-14t6-15l10-11q24-23 22.5-52T384-785l-7-7q-8-8-7.5-21t11.5-24m174-55q9-9 23-9t23 9l40 40q35 37 36 92.5T642-668L519-545q-9 9-22.5 9t-22.5-9q-9-9-9-23t9-23l120-120q19-19 18.5-48.5T593-808l-38-38q-9-9-9-23t9-23m339 535q-9 9-23 9t-23-9l-29-29q-23-23-48-23t-48 23l-22 22q-10 9-23.5 9t-22.5-9q-10-9-9.5-23t9.5-23l20-19q40-40 95.5-41t95.5 39l28 28q9 9 9 23t-9 23" />
  </Svg>
);
