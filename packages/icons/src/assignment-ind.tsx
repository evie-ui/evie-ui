import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAssignmentInd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h182q4-37 35-66.5t74-29.5q43 0 74 29.5t35 66.5h182q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm290.907-721Q496-816 506-825.907t10-26Q516-868 506.093-878t-26-10Q464-888 454-878.093t-10 26Q444-836 453.907-826t26 10M189-241q60-52 131.396-83.5 71.397-31.5 159.5-31.5Q568-356 639.5-325.5 711-295 771-243v-528H189zm292.879-165Q543-406 584.5-447.379q41.5-41.379 41.5-102.5T584.621-652q-41.379-41-102.5-41T379.5-652.121q-41.5 40.879-41.5 102T379.379-447.5q41.379 41.5 102.5 41.5M235-189h490v-4q-54-46-116-68.5T480-284q-67 0-129 22.5T235-193zm246.647-288q-30.147 0-50.897-21.309T410-550.059q0-30.441 21.103-51.191Q452.206-622 482.353-622t50.897 21.103Q554-579.794 554-549.647t-21.103 51.397Q511.794-477 481.647-477M480-507" />
  </Svg>
);
