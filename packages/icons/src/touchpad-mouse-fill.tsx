import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTouchpadMouseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M672.244-55Q575-55 507-123.034T439-288v-45h467v45q0 96.932-68.265 164.966Q769.469-55 672.244-55M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v154q-43-54-103.868-84-60.867-30-130.615-30Q549-691 464-605.5T379-398v110q0 40 11 79t32 74zm290-278q7-80 60.5-139.553Q553-612.107 632-629v216zm273 0v-216q79 17 132.5 76.5T906-413z" />
  </Svg>
);
