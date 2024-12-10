import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgStockMediaFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-347q-39 0-66.5-27.5T55-441v-370q0-39 27.5-67t66.5-28h370q39 0 67 28t28 67v370q0 39-28 66.5T519-347zm166-167-47-58q-4-5-10-5t-10 5l-42 60q-4 5-.5 11.5T216-494h235q7 0 10.5-6.5T461-512l-64-86q-4-5-10-4.5t-9 5.5zM702-55q-52 0-87.5-35.5T579-178q0-52 35.5-88t87.5-36q10 0 19.5 2t17.5 7v-161q0-20 13.5-34t33.5-14h76q18 0 31 13t13 31q0 18-13 30.5T862-415h-36v237q0 52-36 87.5T702-55" />
  </Svg>
);
