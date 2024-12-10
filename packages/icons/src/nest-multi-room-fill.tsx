import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestMultiRoomFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m135-609 345-264 346 264zm0 514v-197h395v197zm455 0v-197h236v197zM135-352v-197h235v197zm295 0v-197h396v197z" />
  </Svg>
);
