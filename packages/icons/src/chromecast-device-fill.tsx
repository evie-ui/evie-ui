import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgChromecastDeviceFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M837-369v-222h133v222zM212.375-246Q128-246 59-296.018t-69-116.709v-134.182Q-10-614 59-664t152.932-50q47.434 0 80.751 11Q326-692 353-680q21 9 41.16 15.5 20.16 6.5 42.376 6.5H792v356H436.235Q414-302 394-295.5T353-280q-27 12-60.188 23-33.187 11-80.437 11M57-458h43.5q9.5 0 16-6.5T123-480q0-9-6.5-15.5t-16-6.5H57q-10 0-16.5 6.5T34-480q0 9 6.5 15.5T57-458" />
  </Svg>
);
