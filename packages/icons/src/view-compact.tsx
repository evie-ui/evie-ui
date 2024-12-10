import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgViewCompact = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M56-141v-678h848v678zm95-461h121v-123H151zm181 0h118v-123H332zm178 0h118v-123H510zm178 0h122v-123H688zm0 184h122v-124H688zm-178 0h118v-124H510zm-178 0h118v-124H332zm-60-124H151v124h121zm416 307h122v-123H688zm-178 0h118v-123H510zm-178 0h118v-123H332zm-181 0h121v-123H151z" />
  </Svg>
);
