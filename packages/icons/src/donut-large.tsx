import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDonutLarge = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M451-57Q283-70 169.5-191.5T56-480q0-168 113.5-289.5T451-905v126q-116 10-194.5 96T178-480q0 117 78.5 202.5T451-183zm60 0v-126q108-8 183-83.5T782-450h123q-12 159-123.5 270.5T511-57m271-453q-11-108-87-184.5T511-780v-126q159 12 270 124.5T905-510z" />
  </Svg>
);
