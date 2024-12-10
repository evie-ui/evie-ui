import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDeskFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M58-266v-382q0-40.213 27.1-67.606Q112.2-743 152-743h657q38.75 0 66.375 27.394Q903-688.213 903-648v382q0 19.75-13.663 33.375T853.825-219q-19.2 0-32.013-12.938Q809-244.875 809-264v-40H642v40q0 19.125-13.288 32.062Q615.424-219 594.825-219 575-219 561.5-232.625 548-246.25 548-266v-382H152v382q0 19.75-13.675 33.375Q124.649-219 104.825-219 85-219 71.5-232.625 58-246.25 58-266m584-297h167v-85H642zm0 172h167v-85H642z" />
  </Svg>
);
