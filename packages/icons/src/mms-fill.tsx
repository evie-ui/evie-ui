import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMmsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M282-393h403q14 0 21-13t-3-25L590-579q-8-10-19-9.5t-19 9.5L445-437l-73-89q-8-10-19-10t-19 10l-71 95q-9 12-2.5 25t21.5 13m-67 178-79 79q-23 23-52 11.5T55-168v-643q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 39-28 66.5T811-215z" />
  </Svg>
);
