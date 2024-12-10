import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPedalBikeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M200-154q-84 0-142-58.5T0-355q0-82 59-141t142-59q68 0 124.5 45.5T395-394h38l-78-220h-39q-15 0-25.5-10T280-650q0-16 10-26t26-10h127q15 0 25.5 11t10.5 30q0 14-8.5 22.5T449-614h-19l23 59h198l-68-179h-65q-15 0-25.5-10T482-770q0-16 10-26t26-10h63q26 0 44.5 12t26.5 36l74 203h34q84 0 142 57.5T960-357q0 84-58 142.5T760-156q-73 0-128-47t-68-119H395q-13 72-67 120t-128 48m122-168v-72h-80q-15 0-25.5 10T206-358q0 16 10 26t26 10zm181-72h62q3-20 13.5-44.5T605-483H477zm179-65 31 78q5 14 17.5 19.5t26.5.5q15-4 20.5-17.5T779-406l-25-76z" />
  </Svg>
);