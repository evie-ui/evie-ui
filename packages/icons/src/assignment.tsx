import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAssignment = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-38.775 0-66.388-27.612Q95-150.225 95-189v-582q0-39.188 27.612-67.094Q150.225-866 189-866h180q11-35 41-57.5t70-22.5q40 0 70 22.5t41 57.5h180q39.188 0 67.094 27.906Q866-810.188 866-771v582q0 38.775-27.906 66.388Q810.188-95 771-95zm0-94h582v-582H189zm130.291-100h201.418q13.041 0 21.666-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325t-21.666-8.5H319.291q-13.041 0-21.666 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325t21.666 8.5m-.003-161h321.424q13.038 0 21.663-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325t-21.663-8.5H319.288q-13.038 0-21.663 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325t21.663 8.5m0-161h321.424q13.038 0 21.663-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325t-21.663-8.5H319.288q-13.038 0-21.663 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325t21.663 8.5M480-791q17.467 0 29.233-11.767Q521-814.533 521-832t-11.767-29.233Q497.467-873 480-873t-29.233 11.767Q439-849.467 439-832t11.767 29.233Q462.533-791 480-791M189-189v-582z" />
  </Svg>
);
