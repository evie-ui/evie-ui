import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTableRowsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M142-95q-19.75 0-33.375-13.625T95-142v-123q0-19.75 13.625-33.375T142-312h676q19.75 0 33.875 13.625T866-265v123q0 19.75-14.125 33.375T818-95zm0-277q-19.75 0-33.375-13.625T95-419v-121q0-19.75 13.625-33.875T142-588h676q19.75 0 33.875 14.125T866-540v121q0 19.75-14.125 33.375T818-372zm0-276q-19.75 0-33.375-13.625T95-695v-123q0-19.75 13.625-33.875T142-866h676q19.75 0 33.875 14.125T866-818v123q0 19.75-14.125 33.375T818-648z" />
  </Svg>
);
