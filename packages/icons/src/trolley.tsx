import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTrolley = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M838-241H216q-38.75 0-66.375-27.125T122-335v-456H97q-19.75 0-33.375-13.675Q50-818.351 50-838.175 50-858 63.625-871.5 77.25-885 97-885h25q38.75 0 66.375 27.625T216-791v456h622q19.75 0 33.375 13.675Q885-307.649 885-287.825 885-268 871.375-254.5 857.75-241 838-241M198.115-35Q166-35 144-57.677t-22-54.5Q122-145 144-167.5t54.115-22.5q32.115 0 55 22.677Q276-144.646 276-111.823 276-80 253.115-57.5t-55 22.5M334-405q-20.75 0-34.375-13.625T286-452v-150q0-19.75 13.625-33.375T334-649h149q19.75 0 33.375 13.625T530-602v150q0 19.75-13.625 33.375T483-405zm32-80h85v-85h-85zm272 80q-20.75 0-34.375-13.625T590-452v-150q0-19.75 13.625-33.375T638-649h149q19.75 0 33.375 13.625T834-602v150q0 19.75-13.625 33.375T787-405zm32-80h85v-85h-85zM806.823-35Q775-35 753-57.677t-22-54.5Q731-145 753.177-167.5t54-22.5Q839-190 862-167.323t23 55.5Q885-80 861.823-57.5t-55 22.5M366-485h85zm304 0h85z" />
  </Svg>
);
