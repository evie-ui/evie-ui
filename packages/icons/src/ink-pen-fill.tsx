import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInkPenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M599-448 448-599l152-152-31-31-205 205q-12 12-29 11.5T306-578q-12-12-12-29.5t12-29.5l191-190q34-35 73.5-35.5T645-827l16 14 43-42q16-17 36.5-17t37.5 17l76 76q16 16 16 38t-16 38zM136-89q-20 0-33.5-13.5T89-137v-64q0-19 7.5-36.5T117-269l288-287 151 151-287 287q-14 14-31.5 21.5T201-89z" />
  </Svg>
);
