import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTvGenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m231-175-19 60q-3 8-9.913 13t-15.391 5H180q-11 0-19-8t-8-19v-72l-2 21q-40 0-68-26.975T55-269v-461q0-40.463 26.975-67.731Q108.95-825 149-825h662q40.463 0 67.731 27.269Q906-770.463 906-730v461q0 40.462-28.5 67.231Q849-175 810-175l-3-21v74q0 10.895-6.953 17.947Q793.094-97 782.344-97h-9.032Q764-97 757.5-102t-8.5-13l-19-60z" />
  </Svg>
);
