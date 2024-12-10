import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCommentsDisabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M655-215H149q-38 0-66-28t-28-66v-506l-19-20q-11-10-10.5-25T36-885q10-10 24.5-10T86-885l785 784q10 11 10 25.5T870-50q-10 10-24.5 10T820-50zm251 48L672-400h41q3 0 5-4.5t2-25.5q0-13-8.5-21.5T690-460h-78l-70-70h148q13 0 21.5-8.5T720-560q0-13-8.5-21.5T690-590H482l-70-70h278q13 0 21.5-8.5T720-690q0-13-8.5-21.5T690-720H352L167-906h644q39 0 67 28.5t28 66.5zM470-400l-60-60H270q-13 0-21.5 8.5T240-430q0 13 8.5 21.5T270-400zM340-530l-57-58h-14q-13 0-21 8t-8 20q0 13 8.5 21.5T270-530z" />
  </Svg>
);
