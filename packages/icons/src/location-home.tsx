import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocationHome = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m537-830 251 189q18.375 13.531 28.188 33.248Q826-588.036 826-566v377q0 39.8-27.394 66.9Q771.213-95 731-95H229q-39.8 0-66.9-27.1Q135-149.2 135-189v-377q0-22.036 9.547-41.752Q154.094-627.469 172-641l251-189q24.68-19 56.84-19Q512-849 537-830m-56.824 442Q529-388 563.5-422.176q34.5-34.177 34.5-83Q598-554 563.618-588q-34.383-34-83.5-34Q431-622 397-587.823q-34 34.176-34 82.999Q363-456 397.176-422q34.177 34 83 34m.017-74Q462-462 450-474t-12-30.5q0-18.5 12.105-30.5 12.106-12 30-12Q498-547 510.5-534.925T523-505q0 19-12.307 31t-30.5 12m.307 209q-51.987 0-99.244 16.5Q334-220 294-189h374q-41-31-88.256-47.5Q532.487-253 480.5-253M229-570v336q53.299-43.975 117.665-68.987Q411.032-328 481-328q68.67 0 132.335 25Q677-278 731-234v-336L480-752zm251 65" />
  </Svg>
);
