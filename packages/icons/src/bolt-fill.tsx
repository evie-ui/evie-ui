import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBoltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M338-332H213q-29 0-42.5-25t3.5-49l376-542q10-14 25-18.5t30 1.5q15 5 24 19.5t7 30.5l-41 326h159q30 0 42.5 27t-5.5 50L381-18Q371-5 355.5-1.5T325-5q-14-6-21.5-19.5T298-55z" />
  </Svg>
);
