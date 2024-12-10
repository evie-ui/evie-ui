import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStayCurrentLandscape = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M111-177q-39.05 0-66.525-27.475Q17-231.95 17-271v-418q0-39.05 27.475-66.525Q71.95-783 111-783h738q39.05 0 66.525 27.475Q943-728.05 943-689v418q0 39.05-27.475 66.525Q888.05-177 849-177zm30-94v-418h-30v418zm60 0h558v-418H201zm618 0h30v-418h-30zM141-689h-30zm678 0h30z" />
  </Svg>
);
