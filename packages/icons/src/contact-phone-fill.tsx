import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgContactPhoneFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M94-109q-39 0-67-27.5T-1-203v-554q0-39 28-66.5T94-851h772q38 0 66 27.5t28 66.5v554q0 39-28 66.5T866-109zm256-297q53 0 89-36.5t36-88.5q0-53-36-89.5T350-657q-53 0-89.5 36.5T224-531q0 52 36.5 88.5T350-406M89-191h525q-45-68-112-108.5T352-340q-80 0-149.5 40.5T89-191m586-287q0-26 4-47.5t12-47.5h45q12 0 22-5t17-15l19-28q10-14 9-31.5T790-683l-19-17q-13-13-30.5-12.5T711-700q-42 47-64 102.5T625-478q0 63 22 118t64 102q12 12 29.5 12.5T771-258l19-18q12-12 13-29.5t-9-31.5l-19-28q-7-10-17-15t-21-5h-46q-8-25-12-46.5t-4-46.5" />
  </Svg>
);
