import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgChess = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-142h597v-90H182zm144-177h308l-21.81-158H348zM142-55q-19.75 0-33.375-13.625T95-102v-122q0-40.212 27.1-67.606Q149.2-319 189-319h50l22-158h-73q-17.625 0-30.312-12.763Q145-502.526 145-520.263 145-538 157.688-551q12.687-13 30.312-13h584q18.05 0 31.025 12.965Q816-538.07 816-520.035T803.025-489.5Q790.05-477 772-477h-73l23 158h49q40.213 0 67.606 27.394Q866-264.212 866-224v122q0 19.75-14.188 33.375Q837.625-55 818-55zm115-509-74-342q37 35 79.5 47.5t78.354 12.5Q375-846 410.5-858.5T480-906q34 35 69.5 47.5t70.061 12.5Q654-846 699-859q45-13 82-47l-77 342h-90l44-205q-16 3-24.694 4-8.693 1-10.306 1-38 4-74.422-4.5T480.043-797Q448-777 411-768.5q-37 8.5-75 4.5-.629 0-8.814-1Q319-766 303-769l43 205zm223 422" />
  </Svg>
);
