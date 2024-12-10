import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowInsert = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M316-616v306q0 19.75-13.675 33.375Q288.649-263 268.825-263 248-263 234.5-276.625 221-290.25 221-310v-420q0-19.75 13.625-33.375T269-777h420q19.75 0 33.375 13.675Q736-749.649 736-729.825 736-710 722.375-696.5 708.75-683 689-683H383l361 362q15 15 15 33t-15 33q-14 15-33 15t-33-15z" />
  </Svg>
);
