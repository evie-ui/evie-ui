import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBluetoothFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M444-163v-232L281-231q-11 11-24.5 11T231-231q-11-12-11-25.5t11-25.5l199-198-199-199q-11-11-11-25t11-25q11-11 25-11t25 11l163 163v-231q0-22 15-34.5t32-12.5q8 0 17.5 3.5T525-829l144 143q6 7 10.5 16t4.5 18q0 9-4.5 18T669-618L530-480l139 138q6 7 10.5 16t4.5 18q0 9-4.5 18T669-274L525-131q-7 8-16.5 11t-17.5 3q-17 0-32-12t-15-34m72-403 86-86-86-85zm0 342 86-84-86-87z" />
  </Svg>
);
