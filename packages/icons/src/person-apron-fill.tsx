import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPersonApronFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-494q-73 0-124-51t-51-124q0-74 51-124.5T480-844q73 0 124.5 50.5T656-669q0 73-51.5 124T480-494m166 372v-285q25 7 48.5 15.5T742-371q39 16 61.5 51t22.5 77v27q0 39-27.5 66.5T731-122zM394-277v-148q22-3 43-5.5t43-2.5q22 0 43 2t44 6v148zm-259 61v-27q0-41 22-75.5t60-52.5q24-11 48-20t49-17v286h-85q-40 0-67-27.5T135-216" />
  </Svg>
);
