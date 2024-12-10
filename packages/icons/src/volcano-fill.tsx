import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgVolcanoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M785-34H189q-51 0-79-43t-7-90l97-217q12-25 35-40.5t52-15.5h57l56-140q11-28 35-44t54-16h177q32 0 57 19t33 50l120 416q13 46-15 83.5T785-34M543-822v-80q0-18 12-29.5t30-11.5q18 0 29.5 12t11.5 30v80q0 18-11.5 29.5T585-780q-18 0-30-12t-12-30m181 35 57-57q12-12 28.5-11.5T839-844q12 13 12 30t-12 30l-57 56q-13 12-30 12t-29-12q-12-12-11.5-29t12.5-30m-337 59-57-58q-13-12-12.5-28.5T330-844q12-12 29-11.5t29 11.5l57 57q12 13 12 30t-12 29q-13 13-29 13t-29-13" />
  </Svg>
);
