import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgScreenLockLandscape = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M390-320q-13 0-21.5-8.5T360-350v-140q0-13 8.5-21.5T390-520h10v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40h10q13 0 21.5 8.5T600-490v141q0 11.941-8.823 20.471Q582.353-320 570-320zm40-200h100v-40q0-20-15-33.5T480-607q-20 0-35 13.513-15 13.512-15 33.487zM111-177q-39.05 0-66.525-27.475Q17-231.95 17-271v-418q0-39.05 27.475-66.525Q71.95-783 111-783h738q39.05 0 66.525 27.475Q943-728.05 943-689v418q0 39.05-27.475 66.525Q888.05-177 849-177zm30-94v-418h-30v418zm60 0h558v-418H201zm618 0h30v-418h-30zM141-689h-30zm678 0h30z" />
  </Svg>
);
