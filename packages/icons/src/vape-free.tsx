import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVapeFree = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M75.41-825q10.491-11 25.041-11 14.549 0 25.566 11.017L851-99l-51 51-129-129H309v-123h238L74-774q-11-11-10.5-25.5T75.41-825M268-297v117q-39-8-74.5-12.5T118-197H93q-18.375 0-29.688-11.723Q52-220.446 52-239.429 52-257 61.5-272.5 71-288 93-280h25q40 0 75.5-4.5T268-297m466-3h107.78q26.425 0 43.822 17.333Q903-265.333 903-239q0 23.027-14 39.514Q875-183 854-180zm-325.143 36Q398-264 390.5-256.457t-7.5 17.6q0 10.857 7.357 18.357t18 7.5q10.643 0 18.143-7.357t7.5-18q0-10.643-7.543-18.143t-17.6-7.5M580-777q13.6 0 22.3 8.977 8.7 8.976 8.7 21.5Q611-734 602.3-725t-22.3 9q-35 0-56 22.5T503-636q0 35 21 59.5t56 24.5h72q59.101 0 101.55 40.143Q796-471.714 796-413v68h-61v-55.224q0-42.418-24.5-66.097Q686-490 651-490h-69q-10 0-23.5-1.5T535-500l-80-78.91q-8-16-10.5-32.545T442-639q0-58.597 39.366-98.299Q520.731-777 580-777m86-126q60 0 99.5 42.493Q805-818.015 805-759q0 35-13.5 62T754-655q67 16 108 79t41 130.427V-345h-62v-100q0-74-49.5-122.5T666-616q-13.167 0-21.583-8.674Q636-633.347 636-646.907q0-13.126 8.417-21.61Q652.833-677 666-677q31 0 54-23.5t23-58.5q0-34-22-58t-55-24q-13.6 0-22.3-8.674-8.7-8.673-8.7-22.233t8.7-22.326Q652.4-903 666-903" />
  </Svg>
);
