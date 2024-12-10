import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const Svg3PFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M309-390h342v-25q0-43-45.5-68.5T480-509q-80 0-125.5 25.5T309-415zm170.876-185Q514-575 537-597.376t23-56.5Q560-688 537.124-711t-57-23Q446-734 423-711.124t-23 57Q400-620 422.876-597.5t57 22.5M215-215l-79 79q-23 23-52 11.312Q55-136.375 55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v502q0 39.05-27.769 66.525Q850.463-215 811-215z" />
  </Svg>
);
