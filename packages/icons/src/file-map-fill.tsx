import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFileMapFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm291-621q-76.396 0-133.198 52.038Q290-611.924 290-523q0 60 46.5 124.5t117.237 129.2q6.263 5.3 12.43 8.3 6.166 3 13.833 3t13.833-2q6.167-2 12.43-7.4Q578-333 624-398t46-125q0-88.924-56.802-140.962Q556.396-716 480-716m0 249q-24.58 0-41.29-17.092-16.71-17.091-16.71-41.5Q422-550 438.71-567T480-584q24.58 0 41.29 17T538-525.5q0 24.5-16.71 41.5T480-467" />
  </Svg>
);
