import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPriorityFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M351-95q-107.167 0-181.583-74.417Q95-243.833 95-351v-258q0-107.167 74.417-182.083Q243.833-866 351-866h258q107.167 0 182.083 74.917Q866-716.167 866-609v258q0 107.167-74.917 181.583Q716.167-95 609-95zm86-222 248-248-51-51-197 197-97-97-51 51z" />
  </Svg>
);
