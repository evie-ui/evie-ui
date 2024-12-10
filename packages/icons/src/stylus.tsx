import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStylus = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M171-101q-32 7-54-15.5T101-171l41-197 226 226zm197-41L142-368l472-472q28-28 66.5-28t65.5 28l94 94q28 27 28 65.5T840-614zm312-630L254-346l92 92 426-426z" />
  </Svg>
);
