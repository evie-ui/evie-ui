import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDns = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M286.882-747Q266-747 251.5-732.382q-14.5 14.617-14.5 35.5Q237-676 251.618-661.5q14.617 14.5 35.5 14.5Q308-647 322.5-661.618q14.5-14.617 14.5-35.5Q337-718 322.382-732.5q-14.617-14.5-35.5-14.5m0 465Q266-282 251.5-267.382q-14.5 14.617-14.5 35.5Q237-211 251.618-196.5q14.617 14.5 35.5 14.5Q308-182 322.5-196.618q14.5-14.617 14.5-35.5Q337-253 322.382-267.5q-14.617-14.5-35.5-14.5M146-895h667q23.65 0 38.325 15Q866-865 866-840.687V-561q0 26.35-14.675 44.175Q836.65-499 813-499H146q-22.775 0-36.887-17.825Q95-534.65 95-561v-279.687Q95-865 109.113-880q14.112-15 36.887-15m43 95v207h582v-207zm-43 369h663q22.65 0 39.825 18.825Q866-393.35 866-367.973V-93q0 28.2-17.175 43.6Q831.65-34 809-34H151q-23.775 0-39.887-15.4Q95-64.8 95-93v-274.973q0-25.377 14.113-44.202Q123.225-431 146-431m43 95v207h582v-207zm0-464v207zm0 464v207z" />
  </Svg>
);
