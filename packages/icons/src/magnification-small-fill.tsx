import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMagnificationSmallFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm131-393q31.413 0 52.706-21.588Q354-571.175 354-603q0-31.412-21.416-52.706-21.416-21.294-53-21.294T226.5-655.584q-21.5 21.416-21.5 53t21.587 53.084Q248.175-528 280-528" />
  </Svg>
);
