import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAlignFlexEndFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M102-55q-19.75 0-33.375-13.675Q55-82.351 55-102.175 55-122 68.625-135.5 82.25-149 102-149h756q19.75 0 33.875 13.675Q906-121.649 906-101.825 906-82 891.875-68.5 877.75-55 858-55zm358-178q-19.75 0-33.375-13.625T413-280v-484q0-19.75 13.625-33.375T460-811h40q19.75 0 33.375 13.625T547-764v484q0 19.75-13.625 33.375T500-233z" />
  </Svg>
);
