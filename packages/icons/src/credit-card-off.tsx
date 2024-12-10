import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCreditCardOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m891-183-80-79v-242H568L439-633h372v-98H342l-94-95h563q39.463 0 67.231 27.769Q906-770.463 906-731v502.041Q906-215 901.5-204T891-183M366-504H149v275h493zM149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-32.7 21-58.85T128-823h20l92 92h-91v98h88L47-823q-10-10.067-10-25.033Q37-863 48.158-874q10.358-10 24.6-10T98-874l754 753q10 11.182 10 25.09Q862-82 851.474-71q-10.527 11-25 11Q812-60 801-70.974L737-135z" />
  </Svg>
);
