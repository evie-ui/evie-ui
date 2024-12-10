import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSyncAlt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m235-244 80 80q14 14 14 33t-14 33q-15 15-34.5 14.5T248-98L88-258q-7-7-11-15.5T73-292q0-9 4-17.5T88-325l161-161q14-14 33-14t33 14q14 14 14.5 33T316-420l-81 81h583q20 0 34 13.5t14 33.5q0 21-14 34.5T818-244zm491-376H142q-20 0-33.5-13.5T95-668q0-20 13.5-33.5T142-715h584l-81-81q-15-14-15-33t15-34q14-14 33.5-13.5T711-863l162 162q6 7 10 15.5t4 17.5q0 10-4 18.5T873-635L712-474q-14 14-33 14t-33-14q-14-14-14.5-33t14.5-33z" />
  </Svg>
);
