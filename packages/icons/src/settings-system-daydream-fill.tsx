import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSettingsSystemDaydreamFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M354-333h273q36 0 62-24t26-59q0-35-26-58.5T627-498h-15q-5-53-39-91t-85-38q-42 0-76 24.5T364-538h-18q-39 0-65 30t-26 72q0 42 28.5 72.5T354-333M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135z" />
  </Svg>
);