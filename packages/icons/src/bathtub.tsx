import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBathtub = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M270.204-641Q236-641 213-664.333t-23-57.587q0-33.08 23.089-56.58 23.088-23.5 57-23.5Q304-802 327.5-778.58q23.5 23.421 23.5 57 0 33.58-23.296 57.08-23.297 23.5-57.5 23.5M204.825-55q-22.5 0-39.662-14Q148-83 148-104q-38.75 0-65.875-27.613Q55-159.225 55-198v-236q0-19.75 13.625-33.375T102-481h88v-19.794Q190-542 219.5-571t70.879-29q24.399 0 47.01 10Q360-580 377-560l51 53.738q6 7.095 13.5 13.179Q449-487 455.951-481H731v-287q0-18.118-12.412-31.059Q706.176-812 689-812q-9.823 0-17.912 2.25Q663-807.5 657-802l-40 36q6 25-4.5 49T586-673L456-797q20.435-18.929 45.217-27.964Q526-834 553-829l51-47q16-16 38.539-23T689-906q57.158 0 97.079 40.658Q826-824.684 826-768v287h32q19.625 0 33.812 13.625Q906-453.75 906-434v236q0 38.775-27.612 66.387Q850.775-104 812-104q0 21-17.162 35Q777.675-55 754-55zM149-199h662v-188H149zm0 0h662z" />
  </Svg>
);
