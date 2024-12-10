import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVotingChip = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M320-175q-126.789 0-215.895-89.149Q15-353.297 15-480.149 15-607 104.105-696 193.211-785 320-785h320q126.789 0 215.895 89.149Q945-606.703 945-479.851 945-353 855.895-264 766.789-175 640-175zm0-95h320q86.605 0 148.302-61.698Q850-393.395 850-480q0-86.605-61.698-148.302Q726.605-690 640-690H320q-86.605 0-148.302 61.698Q110-566.605 110-480q0 86.605 61.698 148.302Q233.395-270 320-270m0-175v45q0 15 10 25t25 10q14 0 24.5-10t10.5-25v-45h45q15 0 25-10t10-25q0-15-10-25t-25-10h-45v-45q0-15-10.5-25T355-595q-15 0-25 10t-10 25v45h-45q-15 0-25 10t-10 25q0 15 10 25t25 10zm295-80v125q0 15 10 25t25 10q15 0 25-10t10-25v-148q0-20-13.5-33.5T638-595h-48q-15 0-25 10t-10 25q0 14 10 24.5t25 10.5zm-135 45" />
  </Svg>
);