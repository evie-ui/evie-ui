import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMangaFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm193-94h469v-442l-116 39-91-30q-14-5-28.5.111T552-644l-55.923 77.177L405-537q-14 5-23.5 17.147Q372-507.706 372-493v95.33L317-320q-10 13-10 28t10 28z" />
  </Svg>
);
