import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHexagonFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M318-103q-25 0-47-12.5T236-150L71-433q-13-22-13-47t13-47l165-283q13-22 35-34.5t47-12.5h325q24 0 46 12.5t36 34.5l164 283q13 22 13 47t-13 47L725-150q-14 22-36 34.5T643-103z" />
  </Svg>
);
