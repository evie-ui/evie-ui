import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMoveToInboxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm291-203q33 0 61-15.5t45-44.5q7-13 21.5-18t30.788-5H771v-390H189v390h134q14.862 0 29.431 5T374-358q17 29 45 44.5t61 15.5m-30-234v-164q0-12 8.5-21t21.5-9q13 0 21.5 9t8.5 21v164l61.146-61.146Q574-596 586.5-591t23 9q10.5 4 14.5 3t-10-15q9 9 9 21.5t-9 21.5L514-451q-7.167 6.909-16.194 10.955Q488.778-436 479.889-436q-8.889 0-17.839-4.045Q453.1-444.091 446-451l-99-100q-3-3 1.5-15.5t9-23q4.5-10.5 4-14.5T348-594q9-9 21-8.5t21 9.5z" />
  </Svg>
);
