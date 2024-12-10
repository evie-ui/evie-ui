import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOutdoorGarden = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M57-97v-634l183-138 120 90 120-90 120 90 120-90 183 138v634zm94-94h165v-500l-76-60-89 67zm247 0h164v-500l-82-60-82 60zm246 0h165v-493l-89-67-76 60z" />
  </Svg>
);
