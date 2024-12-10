import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCreditCardOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M891-183 568-504h243v-129H439L248-826h563q39 0 67 28t28 67v502q0 14-4.5 25T891-183M149-504h217L237-633h-88zM801-71l-64-64H149q-39 0-66.5-27.5T55-229v-502q0-33 21-59t52-33h20l92 92H139l-92-92q-10-10-10-25t11-26q10-10 24.5-10T98-874l754 753q10 11 10 25t-10 25q-11 11-25.5 11T801-71" />
  </Svg>
);
