import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTvGen = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m231-175-19 60q-3.167 8-10.105 13-6.938 5-14.992 5H180q-10.8 0-18.9-8.1-8.1-8.1-8.1-18.9v-72l-2 21q-39.75 0-67.875-27.1T55-269v-461q0-40.213 27.1-67.606Q109.2-825 149-825h662q40.213 0 67.606 27.394Q906-770.213 906-730v461q0 40.212-28.625 67.106Q848.75-175 810-175l-3-21v74q0 10.526-7.126 17.763Q792.748-97 782.382-97h-9.07q-9.312 0-15.895-4.923Q750.833-106.846 749-115l-19-60zm-82-94h662v-461H149zm331-230" />
  </Svg>
);
