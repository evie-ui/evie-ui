import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStarsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-362 99 76q14 11 28.5 0t9.5-28l-41-123 98-70q14-10 9-26.5T661-550H541l-39-128q-5-16-21.5-16T458-678l-40 128H299q-18 0-23 16.5t9 26.5l98 70-40 124q-5 17 9.5 27.5t28.5-.5zm0 307q-90 0-168-32.5T177-177q-57-57-89.5-135T55-480q0-90 32.5-167.5t89.5-135Q234-840 312-873t168-33q90 0 167.5 33t135 90.5Q840-725 873-647.5T906-480q0 90-33 168t-90.5 135q-57.5 57-135 89.5T480-55" />
  </Svg>
);