import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVotingChipFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M320-175q-127 0-216-89T15-480q0-127 89-216t216-89h320q127 0 216 89t89 216q0 127-89 216t-216 89zm0-270v45q0 15 10 25t25 10q14 0 24.5-10t10.5-25v-45h45q15 0 25-10t10-25q0-15-10-25t-25-10h-45v-45q0-15-10.5-25T355-595q-15 0-25 10t-10 25v45h-45q-15 0-25 10t-10 25q0 15 10 25t25 10zm295-80v125q0 15 10 25t25 10q15 0 25-10t10-25v-148q0-20-13.5-33.5T638-595h-48q-15 0-25 10t-10 25q0 14 10 24.5t25 10.5z" />
  </Svg>
);
