import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWeatherMixFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M498 3q-24 0-41-16.5T440-53q0-12 4.5-22T457-93l26-23q6-6 14.5-6t15.5 6l26 23q7 8 11.5 18t4.5 22q0 23-16.5 39.5T498 3M325-101q-12-12-12-27.5t12-27.5l76-76q11-11 27-11t27 11q11 12 11 27.5T455-177l-77 77q-12 11-27 10.5T325-101m292-47-37-38q-7-7-7-17t7-17l37-38q7-7 17-7t17 7l38 38q7 7 7 17t-7 17l-38 38q-7 7-17 7t-17-7m-332-38-38 38q-7 7-17 7t-17-7l-38-38q-7-7-7-17t7-17l38-38q7-7 17-7t17 7l38 38q7 7 7 17t-7 17m5-148q-94 0-160.5-67T63-561q0-84 58-150t145-75q35-56 90.5-89.5T480-909q93 0 158 58t84 144q82 8 128.5 61.5T897-521q0 77-54.5 132T710-334z" />
  </Svg>
);
