import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAwardStarFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-381 71 42q13 9 25-1t9-25l-19-78 61-54q12-10 7-24.5T614-538l-81-6-31-76q-6-14-22-14t-22 14l-31 76-81 6q-15 2-20 16.5t7 24.5l61 54-18 78q-4 15 8 25t26 1zM342-135H229q-40 0-67-27t-27-67v-113l-72-72q-14-14-20.5-31T36-480q0-18 6.5-35T63-546l72-72v-113q0-40 27-67.5t67-27.5h113l72-71q14-14 31.5-20.5T481-924q18 0 35 7t31 21l71 70h113q40 0 67.5 27.5T826-731v113l71 72q14 14 20.5 31t6.5 35q0 18-6.5 35T897-414l-71 72v113q0 40-27.5 67T731-135H618l-71 70q-14 14-31 20.5T481-38q-18 0-35-6.5T415-65z" />
  </Svg>
);
