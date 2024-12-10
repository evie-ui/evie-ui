import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLyrics = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M143-315v-490zM49-33v-772q0-40.213 27.1-67.606Q103.2-900 143-900h450q40.213 0 67.606 27.394Q688-845.213 688-805v53q-32 12-56.857 35T593-663v-142H143v490h450v-177q13.286 31 38.143 54T688-403v88q0 39.8-27.394 66.9Q633.213-221 593-221H236zm164-355h190v-79H213zm547-70q-50 0-85-34.743-35-34.742-35-85.375 0-50.215 34.978-84.549Q709.955-697 759.924-697q7.237 0 17.157 2Q787-693 800-689v-218h170v79h-90v250q0 50.583-35 85.292Q810-458 760-458m-547-62h310v-80H213zm0-133h310v-80H213z" />
  </Svg>
);
