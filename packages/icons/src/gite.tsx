import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGite = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-175q-39.8 0-66.9-27.1Q55-229.2 55-269v-265q0-18.689 7-36.344Q69-588 82-601l120.736-120.648Q211-731 222.6-736q11.6-5 24.4-5h30v-41q0-18.05 12.738-31.025Q302.476-826 320.175-826 339-826 351.5-813.025T364-782v41h336q19.587 0 37.338 7.609Q755.089-725.783 768-713l111 112q12.304 12.832 19.652 30.479Q906-552.873 906-534v265q0 39.8-27.625 66.9Q850.75-175 812-175zm504-87h166v-275l-83-84-83 84zm-87 0v-228H142v228z" />
  </Svg>
);
