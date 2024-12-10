import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGeneralDeviceFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M342-202q-19.75 0-33.375-13.625T295-249v-539q0-39.75 27.125-67.375T389-883h182q39.75 0 67.375 27.625T666-788v539q0 19.75-14.125 33.375T618-202zm0 30h276q19.75 0 33.875 13.675Q666-144.649 666-124.825 666-104 651.875-90.5 637.75-77 618-77H342q-19.75 0-33.375-13.675Q295-104.351 295-125.175 295-145 308.625-158.5 322.25-172 342-172" />
  </Svg>
);
