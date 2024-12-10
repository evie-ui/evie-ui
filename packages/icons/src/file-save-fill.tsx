import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFileSaveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m696-158-92-93q-10-9-10-20.5t10-21.5q9-9 20.5-9t21.5 9l54 55v-151q0-13 8.5-21.5T730-419q13 0 21.5 8.5T760-389v151l55-55q9-9 20.5-9t21.5 9q9 10 9 21.5t-9 20.5l-93 93q-14 14-34 14t-34-14M610 0q-13 0-21.5-8.5T580-30q0-13 8.5-21.5T610-60h240q13 0 21.5 8.5T880-30q0 13-8.5 21.5T850 0zM237-143q-39 0-66.5-27.5T143-237v-566q0-39 27.5-66.5T237-897h269q18 0 36 7.5t31 20.5l176 176q13 13 20.5 31t7.5 36v100q0 20-13.5 33.5T730-479H615q-40 0-67.5 27.5T520-385v195q0 20-13.5 33.5T473-143zm328-471h118L494-803l189 189-189-189v118q0 29 21 50t50 21" />
  </Svg>
);
