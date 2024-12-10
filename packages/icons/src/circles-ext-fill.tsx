import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCirclesExtFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M209-81q-73 0-124-51T34-256.5q0-73.5 51-124T209-431q73 0 124.5 50.5t51.5 124q0 73.5-51.5 124.5T209-81m543 0q-73 0-124-51t-51-124.5q0-73.5 51-124T752-431q73 0 124 50.5t51 124q0 73.5-51 124.5T752-81M481-353q-29.474 0-49.737-19.763T411-423q0-29.474 20.263-49.737T481-493q29.474 0 49.737 20.263T551-423q0 30.474-20.263 50.237T481-353m0-211q-73 0-124-51t-51-124q0-73 51-124.5T481-915q73 0 124.5 51.5T657-739q0 73-51.5 124T481-564" />
  </Svg>
);
