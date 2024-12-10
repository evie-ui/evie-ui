import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNoteAlt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-38.775 0-66.388-27.612Q95-150.225 95-189v-582q0-39.188 27.612-67.094Q150.225-866 189-866h180q11-35 41-57.5t70-22.5q40 0 70 22.5t41 57.5h180q39.188 0 67.094 27.906Q866-810.188 866-771v582q0 38.775-27.906 66.388Q810.188-95 771-95zm0-94h582v-582H189zm291-602q17.467 0 29.233-11.767Q521-814.533 521-832t-11.767-29.233Q497.467-873 480-873t-29.233 11.767Q439-849.467 439-832t11.767 29.233Q462.533-791 480-791M189-189v-582zm122-101h16.127q9.825 0 17.849-3Q353-296 360-303l243-242.724L544-607 300-363q-7 7.286-10 15.299t-3 16.513v18.688q0 8.5 7.2 15.5t16.8 7m310-274 39-39q7-7 7.5-16t-7.5-16l-29-28q-7-8-15.364-7.5-8.363.5-15.636 7.5l-38 38z" />
  </Svg>
);
