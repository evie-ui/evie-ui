import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCalendarViewWeekFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M572-152q-26.35 0-44.175-17.4Q510-186.8 510-213.934v-532.132q0-27.134 17.825-44.534T572-808h39q25.925 0 43.463 17.4Q672-773.2 672-746.066v532.132q0 27.134-17.537 44.534Q636.925-152 611-152zm-221.764 0q-27.011 0-44.624-17.4Q288-186.8 288-213.934v-532.132q0-27.134 17.825-44.534T350-808h38q26.35 0 44.175 17.4Q450-773.2 450-746.066v532.132q0 27.134-17.825 44.534T388-152zM134-152q-27.2 0-44.6-17.4Q72-186.8 72-213.934v-532.132Q72-773.2 89.4-790.6T134-808h32q27.2 0 44.6 17.4 17.4 17.4 17.4 44.534v532.132q0 27.134-17.4 44.534T166-152zm660 0q-27.2 0-44.6-17.4-17.4-17.4-17.4-44.534v-532.132q0-27.134 17.4-44.534T794-808h32q27.2 0 44.6 17.4 17.4 17.4 17.4 44.534v532.132q0 35.334-17.4 48.634Q853.2-152 826-152z" />
  </Svg>
);