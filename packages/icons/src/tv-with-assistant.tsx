import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTvWithAssistant = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M414.123-451Q435-451 449.5-465.123q14.5-14.123 14.5-35Q464-521 449.307-535q-14.693-14-35.57-14-20.877 0-34.807 14.123-13.93 14.123-13.93 35Q365-479 379.123-465q14.123 14 35 14m132.14 0q20.877 0 34.807-14.123 13.93-14.123 13.93-35Q595-521 580.877-535q-14.123-14-35-14Q525-549 510.5-534.877q-14.5 14.123-14.5 35Q496-479 510.693-465q14.693 14 35.57 14m-263.333 0q20.07 0 34.57-14.123t14.5-35Q332-521 317.57-535q-14.43-14-35-14T248-534.877q-14 14.123-14 35Q234-479 248.067-465q14.068 14 34.863 14m394.5 0Q698-451 712-465.123t14-35Q726-521 711.933-535q-14.068-14-34.863-14-20.07 0-34.57 14.123t-14.5 35Q628-479 642.43-465q14.43 14 35 14M231-175l-19 60q-3.167 8-10.105 13-6.938 5-14.992 5H180q-10.8 0-18.9-8.1-8.1-8.1-8.1-18.9v-72l-2 21q-39.75 0-67.875-27.1T55-269v-461q0-40.213 27.1-67.606Q109.2-825 149-825h662q40.213 0 67.606 27.394Q906-770.213 906-730v461q0 40.212-28.625 67.106Q848.75-175 810-175l-3-21v74q0 10.526-7.126 17.763Q792.748-97 782.382-97h-9.07q-9.312 0-15.895-4.923Q750.833-106.846 749-115l-19-60zm-82-94h662v-461H149zm331-230" />
  </Svg>
);
