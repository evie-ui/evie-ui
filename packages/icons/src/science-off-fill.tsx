import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgScienceOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M614-422 347-689v-74h-29q-20 0-33.5-13.5T271-810q0-20 13.5-33.5T318-857h324q20 0 34 13.5t14 33.5q0 20-14 33.5T642-763h-28zM781-68l-27-27H172q-59 0-83-53t16-98l234-265L56-794q-11-11-10.5-25T57-844q11-12 25-12t25 12l726 726q11 12 11 26t-12 25q-11 11-25 11t-26-12" />
  </Svg>
);
