import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPanoramaHorizontalFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M119.6-135Q93-135 74-154t-19-46v-560q0-26.6 19-46.3Q93-826 119.6-826q15.4 0 42.4 9.5t71 21Q277-784 337.5-775t142.5 9q82 0 142.5-9T727-795.5q44-11.5 71-21t42.333-9.5q26.459 0 46.063 19.7Q906-786.6 906-760v560q0 27-19.604 46t-46.063 19Q825-135 798-144t-71-20.5q-44-11.5-104.5-21T480-195q-82 0-142.731 9.5Q276.538-176 233-165q-44 12-71 21t-42.4 9" />
  </Svg>
);
