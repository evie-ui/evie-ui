import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPagesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h582q39 0 67 28t28 67v582q0 39-28 66.5T771-95zm291-286 71 42q13 9 25-1t9-25l-19-78 61-54q12-10 7-24.5T614-538l-81-6-31-76q-6-14-22-14t-22 14l-31 76-81 6q-15 2-20 16.5t7 24.5l61 54-18 78q-4 15 8 25t26 1z" />
  </Svg>
);
