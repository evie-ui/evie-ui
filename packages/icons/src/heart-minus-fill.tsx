import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHeartMinusFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M553-393v-94h354v94zM439-86l-92-83q-97-87-161-151.5t-102.5-117q-38.5-52.5-54-98T14-631q0-105 70.5-175.5T259-877q52 0 98 19t82 55q37-36 83-55t97-19q99 0 168 63t78 157q-30-20-63.5-30.5T732-699q-108 0-183.5 75.5T473-440q0 66 32 123t88 92q-17 17-37.5 35.5T515-153z" />
  </Svg>
);
