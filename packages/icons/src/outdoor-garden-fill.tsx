import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOutdoorGardenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M58-97h256v-646L186-869 58-743zm294 0h256v-646L480-869 352-743zm294 0h256v-646L774-869 646-743z" />
  </Svg>
);
