import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFilterFramesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M134-55q-31.838 0-55.419-23.581Q55-102.162 55-134.004v-612.062q0-31.729 23.581-55.331Q102.162-825 134-825h173l142-128q13.714-12 31-12t31 12l143 127.623h172q31.725 0 55.862 23.954Q906-777.468 906-746v612q0 31.838-24.138 55.419Q857.725-55 826-55zm15-94h662v-582H149zm100-147v-288q0-19.75 13.625-33.375T296-631h368q19.75 0 33.375 13.625T711-584v288q0 19.75-13.625 33.375T664-249H296q-19.75 0-33.375-13.625T249-296" />
  </Svg>
);
