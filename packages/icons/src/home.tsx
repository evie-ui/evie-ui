import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHome = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-189h124v-211q0-19.75 13.625-33.375T400-447h160q19.75 0 33.375 13.625T607-400v211h124v-376.667L480-754 229-565.667zm-94 0v-377q0-22.036 9.547-41.752Q154.094-627.469 172-641l251-189q24.68-19 56.84-19Q512-849 537-830l251 189q18.375 13.531 28.188 33.248Q826-588.036 826-566v377q0 39.8-27.394 66.9Q771.213-95 731-95H571q-19.75 0-33.375-13.625T524-142v-222h-88v222q0 19.75-13.625 33.375T389-95H229q-39.8 0-66.9-27.1Q135-149.2 135-189m345-283" />
  </Svg>
);