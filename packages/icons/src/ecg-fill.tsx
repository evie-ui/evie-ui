import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEcgFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M55-524v-207q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v312q-22-14-46.5-21.5T810-448q-25 0-47.5 7.5T720-421q-9-5-17.5-9.5T684-437v-39q0-20-14-34t-34-14h-89l-68-136q-5-11-16-16.5t-23-5.5q-12 0-23 5.5T401-660L280-417l-41-83q-5-11-16-17.5t-23-6.5zm94 389q-39 0-66.5-27.5T55-229v-195h124l62 124q5 11 16 17t23 6q12 0 23-6t16-17l121-243 41 83q5 11 16 17t23 6h53q-50 19-81.5 62T460-277q0 47 19 79t52 63zm481-252q27 0 50 12.5t40 34.5q17-22 40-34.5t50-12.5q46 0 78 32t32 78q0 37-26 70T780-99l-29 26q-13 11-31 11t-31-11l-29-26q-88-75-114-108t-26-70q0-46 32-78t78-32" />
  </Svg>
);