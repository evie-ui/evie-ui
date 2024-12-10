import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUpcomingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-70q-39 0-66.5-27.5T55-164v-197q0-38 27.5-66t66.5-28h173q12 0 22 7.5t12 20.5q12 47 45 73t79 26q46 0 79-26t45-73q2-13 12-20.5t22-7.5h173q39 0 67 28t28 66v197q0 39-28 66.5T811-70zm542-510q-14-14-14-33t14-34l92-92q14-14 33-13.5t33 14.5q15 15 15 34t-15 33l-92 92q-14 15-33 14.5T691-580m-421 0q-14 15-33.5 15T203-580l-93-92q-15-14-14.5-32.5T111-738q14-14 33.5-14t33.5 14l92 92q14 15 14 33.5T270-580m210-90q-20 0-33.5-13.5T433-718v-127q0-20 13.5-33.5T480-892q20 0 33.5 13.5T527-845v127q0 21-13.5 34.5T480-670" />
  </Svg>
);
