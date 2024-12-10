import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWeatherHailFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m569-66-38 38q-7 7-17 7t-17-7l-37-38q-7-7-7-17t7-17l37-38q7-7 17-7t17 7l38 38q7 7 7 17t-7 17M328-98q-12-12-12-27.5t12-27.5l76-76q11-11 27-11t27 11q11 12 11 27.5T458-174l-77 77q-12 11-27 10.5T328-98m361-88-38 38q-7 7-17 7t-17-7l-37-38q-7-7-7-17t7-17l37-38q7-7 17-7t17 7l38 38q7 7 7 17t-7 17m-404 0-38 38q-7 7-17 7t-17-7l-38-38q-7-7-7-17t7-17l38-38q7-7 17-7t17 7l38 38q7 7 7 17t-7 17m5-148q-94 0-160.5-67T63-561q0-84 58-150t145-75q35-56 90.5-89.5T480-909q93 0 158 58t84 144q82 8 128.5 61.5T897-521q0 77-54.5 132T710-334z" />
  </Svg>
);
