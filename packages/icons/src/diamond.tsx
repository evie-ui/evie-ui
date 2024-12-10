import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDiamond = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-156q-20 0-39.5-8T407-189L107-551q-11-13-17-28t-6-32q0-11 3-21.5t8-21.5l72-146q11-24 34-37.5t51-13.5h456q28 0 51 13.5t35 37.5l71 146q5 11 8 21.5t3 21.5q0 17-6 32t-16 28L553-189q-14 17-33.5 25t-39.5 8M367-630h226l-70-139h-86zm83 363v-303H198zm60 0 252-303H510zm151-363h121l-69-139H591zm-483 0h122l69-139H247z" />
  </Svg>
);
