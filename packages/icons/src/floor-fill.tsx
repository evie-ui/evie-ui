import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFloorFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M255.187-167v-133q0-19.75 13.532-33.375Q282.25-347 303-347h132.141v-133q0-19.75 13.555-33.375Q462.25-527 483-527h132.141v-133q0-19.75 13.555-33.375Q642.25-707 663-707h132.141v-103q0-19.75 13.605-33.375T842.675-857Q863-857 876.5-843.375 890-829.75 890-810v150q0 19.75-13.625 33.375T843-613H710v133q0 19.75-13.625 33.375T663-433H530v133q0 19.75-13.625 33.375T483-253H350v133q0 19.75-13.625 33.375T303-73H153q-20.75 0-34.375-13.675Q105-100.351 105-120.175 105-140 118.625-153.5 132.25-167 153-167z" />
  </Svg>
);
