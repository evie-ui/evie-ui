import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShiftLockFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M305-252v-163H187q-29.362 0-42.681-27Q131-469 151-493l293-366q13.88-17 35.94-17Q502-876 517-859l292 366q20 24 6.681 51-13.319 27-42.681 27H655v163q0 19.75-13.625 33.375T608-205H352q-19.75 0-33.375-13.625T305-252M162-37q-19.75 0-33.375-13.675Q115-64.351 115-85.175 115-105 128.625-118.5 142.25-132 162-132h636q19.75 0 33.875 13.675Q846-104.649 846-84.825 846-64 831.875-50.5 817.75-37 798-37z" />
  </Svg>
);
