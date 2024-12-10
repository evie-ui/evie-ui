import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDraftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-39 0-66.5-27.5T135-149v-662q0-39 27.5-67t66.5-28h323q19 0 37 8t31 21l177 177q13 13 21 31t8 37v483q0 39-28 66.5T731-55zm313-617q0 20 13.5 33.5T589-625h142L542-811z" />
  </Svg>
);
