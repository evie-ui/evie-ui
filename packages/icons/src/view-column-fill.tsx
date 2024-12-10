import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewColumnFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M133-175q-19.75 0-33.375-13.625T86-222v-516q0-19.75 13.625-33.875T133-786h137q19.75 0 33.375 14.125T317-738v516q0 19.75-13.625 33.375T270-175zm277 0q-19.75 0-33.375-13.625T363-222v-516q0-19.75 13.625-33.875T410-786h141q19.75 0 33.375 14.125T598-738v516q0 19.75-13.625 33.375T551-175zm281 0q-20.75 0-34.375-13.625T643-222v-516q0-19.75 13.625-33.875T691-786h136q19.75 0 33.875 14.125T875-738v516q0 19.75-14.125 33.375T827-175z" />
  </Svg>
);
