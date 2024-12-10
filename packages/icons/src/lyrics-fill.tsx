import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLyricsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M213-388h190v-79H213zm546.706-70Q710-458 675-493.243q-35-35.242-35-84.875 0-49.215 35.208-84.049Q710.417-697 760-697q9.825 0 20.037 1.786Q790.25-693.429 800-689v-218h170v79h-90v250q0 49.583-35.294 84.792-35.294 35.208-85 35.208M213-520h310v-80H213zm0-133h310v-80H213zm23 432L49-33v-772q0-40.213 27.1-67.606Q103.2-900 143-900h450q40.213 0 67.606 27.394Q688-845.213 688-805v53q-54 24-86 73t-32 109.5q0 55.5 33.646 100.098Q637.292-424.805 688-403v88q0 39.8-27.394 66.9Q633.213-221 593-221z" />
  </Svg>
);
