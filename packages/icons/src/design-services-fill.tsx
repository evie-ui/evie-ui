import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDesignServicesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m343-533 83-83-59-58-29 27q-10 11-22.5 10T293-647q-9-10-9-23t9-22l29-29-68-66-82 84zm360 362 83-84-69-68-28 29q-10 9-23 9t-22-10q-10-10-10-23t10-23l28-28-58-59-84 84zM597-671l71 72 108-107-70-71zM142-95q-20 0-33.5-13.5T95-142v-124q0-10 3-18t10-15l176-176-179-178q-21-22-21-51t21-51l98-99q21-22 50-22t51 21l181 181 172-172q10-10 22.5-15t25.5-5q13 0 25.5 5t22.5 15l93 92q10 10 15 22.5t5 25.5q0 14-5 26.5T846-657L674-486l181 181q21 22 21 51t-21 50l-98 98q-22 21-51 21t-51-21L474-287 297-109q-7 7-15 10.5T265-95z" />
  </Svg>
);
