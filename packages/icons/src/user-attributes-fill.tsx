import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgUserAttributesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M538-711v-84h371v84zm0 171v-83h371v83zm0 171v-82h371v82zm-224.294-34Q253-403 213.5-443.294t-39.5-101Q174-605 213.985-645q39.986-40 100.25-40 60.682 0 100.723 40.191Q455-604.618 455-544.059q0 60.976-40.294 101.017Q374.412-403 313.706-403M52-114v-88.722Q52-228 63.895-250.041 75.79-272.082 96-282q47-34 103.345-50.5t114.5-16.5Q372-349 428-331t105 49q19.211 13.031 31.605 33.766Q577-227.499 577-202.712V-114z" />
  </Svg>
);
