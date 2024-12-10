import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHardware = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M386-83q-23 0-37-18.5T335-145v-470H192q-22.791 0-36.895-17.5Q141-650 144.765-672.034 163-762 233.489-819.5 303.978-877 397-877h167q26 0 44 18t18 43v81l119-121q9.256-10.111 20.686-15.556Q777.116-877 790-877q14.575 0 25.287 8.5Q826-860 826-847v334q0 14-10.713 22-10.712 8-25.287 8-12.884 0-24.314-5.167Q754.256-493.333 745-503L626-625v480q0 26-18 44t-44.328 18zm43-95h102v-222H429zm0-316h102v-288H397q-39 0-75.5 19T269-709h160zm51 14" />
  </Svg>
);
