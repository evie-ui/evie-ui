import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHomeSpeaker = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M377-83q-84.327 0-138.664-62.79Q184-208.58 194.403-292l55.716-435q1.452-15.821 11.167-27.911Q271-767 285-774l334-133q27-10 51 4.5t27 43.5l70.63 570q10.37 82-44.07 144T586-83zm-62-401h333l-39-316-269 106zm62 306h209q40.735 0 67.867-29.5Q681-237 674.765-276.74L660.475-389H302.082L288-278q-7 40 20.429 70 27.428 30 68.571 30m104-211v-95zm0 0" />
  </Svg>
);
