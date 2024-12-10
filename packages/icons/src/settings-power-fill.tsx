import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSettingsPowerFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-560v-290q0-19.75 13.675-33.375Q460.351-897 480.175-897 500-897 513.5-883.375 527-869.75 527-850v290q0 20.75-13.675 34.375Q499.649-512 479.825-512 460-512 446.5-525.625 433-539.25 433-560m46.5 342q-138.5 0-236-97.303T146-552q0-69.074 24.5-129.037Q195-741 242-788q15-15 36.5-14.5t36.833 15.833Q329-773 326.5-754T312-720q-33 35-52.5 77.5T240-552q0 98 70.5 169T480-312q99 0 169.5-71T720-552q0-50-19-97.5T645-731q-14-13-16.5-31.5t10.708-31.708Q653-809 674.5-810.5 696-812 712-797q52 47 77.5 111T815-552q0 139.394-98.5 236.697T479.5-218M299.07 2Q278 2 263-12.217q-15-14.218-15-36.713 0-20.495 15-35.283Q278-99 299.07-99q21.92 0 35.925 14.787Q349-69.425 349-48.93q0 22.495-14.005 36.713Q320.99 2 299.07 2M480 2q-21.85 0-35.425-14.505Q431-27.01 431-47.93 431-69 444.575-84T480.5-99q20.5 0 35 15T530-47.93q0 20.92-14.45 35.425Q501.1 2 480 2m183.07 0q-21.92 0-35.995-14.505Q613-27.01 613-47.93 613-69 627.005-84t35.925-15Q684-99 698.5-84T713-47.93q0 20.92-14.43 35.425Q684.14 2 663.07 2" />
  </Svg>
);