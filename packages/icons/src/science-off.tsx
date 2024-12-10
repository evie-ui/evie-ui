import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScienceOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m614-422-95-95v-246h-78v168l-94-94v-74h-22q-21 0-34.5-13.5T277-810q0-20 13.5-33.5T325-857h317q20 0 34 13.5t14 33.5q0 20-14 33.5T642-763h-28zM180-189h480L407-443zM781-68l-27-27H172q-59 0-83-53t16-98l234-265L56-794q-11-11-10.5-25T57-844q11-12 25-12t25 12l726 726q11 12 11 26t-12 25q-11 11-25 11t-26-12M480-556" />
  </Svg>
);
