import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDirectionsRailway = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M135-356v-369q0-95.331 83.5-140.166Q302-910 479.901-910q183.753 0 264.926 43.419T826-725v369q0 65-40.5 116T686-179l75 51q14 9 9 25.5T747-86H213q-18 0-23-16.5t9-25.5l76-51q-60-10-100-61t-40-116m94-185h502v-155H229zm410 60H229h502zM480-315q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16m-159 55h318q38.267 0 65.133-28.367Q731-316.733 731-356v-125H229v125q0 39.267 26.867 67.633Q282.733-260 321-260m159-556q-120 0-173 15.5T231-756h492q-19-27-73.5-43.5T480-816m0 60h243-492z" />
  </Svg>
);
