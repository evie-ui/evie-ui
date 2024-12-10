import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgContactMailFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M94-109q-39 0-67-27.5T-1-203v-554q0-39 28-66.5T94-851h772q38 0 66 27.5t28 66.5v554q0 39-28 66.5T866-109zm256-297q53 0 89-36.5t36-88.5q0-53-36-89.5T350-657q-53 0-89.5 36.5T224-531q0 52 36.5 88.5T350-406M89-191h525q-45-68-112-108.5T352-340q-80 0-149.5 40.5T89-191m519-335h158q20 0 33.5-13.5T813-574v-83q0-20-13.5-33.5T766-704H608q-20 0-33.5 13.5T561-657v83q0 21 13.5 34.5T608-526m79-77 77-58q7-6 16-1.5t9 14.5q0 1-6 13l-67 52q-13 9-28 9t-28-9l-69-52q-2-2-6-13 0-10 9.5-14.5T611-661z" />
  </Svg>
);
