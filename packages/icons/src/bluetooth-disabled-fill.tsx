import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBluetoothDisabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M444-395 281-231q-11 11-24.5 11T231-231q-11-12-11-25.5t11-25.5l175-175L79-785q-10-9-10-20.5T79-827q9-9 20.5-9t21.5 9l715 716q9 9 9.5 21T836-69q-9 9-21 9t-21-9L629-234 525-131q-7 8-16.5 11t-17.5 3q-17 0-32-12t-15-34zm72 171 60-60-60-60zm25-266-51-52 112-110-86-85v220l-72-71v-209q0-22 15-34.5t32-12.5q8 0 17.5 3.5T525-829l144 143q6 7 10.5 16t4.5 18q0 9-4.5 18T669-618z" />
  </Svg>
);
