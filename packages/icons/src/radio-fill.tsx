import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRadioFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-34q-39.05 0-66.525-27.769Q55-89.537 55-129v-543q0-14 2-29t14-21l506-204q11.585-5 22.98-.56 11.395 4.44 15.52 16.56 4.5 12-.18 23.125t-15.87 15.677L236-725h575q39.463 0 67.231 27.769Q906-669.463 906-630v501q0 39.463-27.769 67.231Q850.463-34 811-34zm161.183-150Q351-184 379-212.683q28-28.683 28-68.5Q407-322 378.817-350q-28.183-28-69-28T241-349.817q-28 28.183-28 69Q213-241 241.183-212.5q28.183 28.5 69 28.5M149-485h511v-25.175q0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.625T720-510v25h91v-145H149z" />
  </Svg>
);
