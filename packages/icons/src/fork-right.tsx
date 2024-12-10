import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgForkRight = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M398-95q-20 0-33.5-13.5T351-142v-544l-57 58q-14 14-33 14t-33-15q-14-14-14-32.5t14-33.5l137-137q14-14 33.5-14t33.5 14l137 137q14 15 14 34t-14 33q-15 14-34 13.5T503-629l-57-57v281q29-24 64.5-42t91.5-18q14 0 35 3.5t38 7.5l-57-57q-14-14-14-32.5t15-33.5q14-14 32.5-14t33.5 14l137 137q14 14 14 33.5T822-373L685-236q-15 14-33.5 14T619-236q-14-14-14-33t14-33l58-58q-14-3-35-6.5t-43-3.5q-51 0-93.5 30T446-254v112q0 20-14 33.5T398-95" />
  </Svg>
);