import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFilterFrames = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M134-55q-31.838 0-55.419-23.581Q55-102.162 55-134v-612q0-31.725 23.581-55.862Q102.162-826 134-826h173l142-127q13.714-12 31-12t31 12l143 127h172q31.725 0 55.862 24.138Q906-777.725 906-746v612q0 31.838-24.138 55.419Q857.725-55 826-55zm15-94h662v-582H149zm100-147v-288q0-19.75 13.625-33.375T296-631h368q19.75 0 33.375 13.625T711-584v288q0 19.75-13.625 33.375T664-249H296q-19.75 0-33.375-13.625T249-296m80-33h303v-223H329zm151-110" />
  </Svg>
);
