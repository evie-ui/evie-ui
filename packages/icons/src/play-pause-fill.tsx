import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPlayPauseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M148-299v-362l268 181zm375 11v-384h94v384zm194 0v-384h95v384z" />
  </Svg>
);
