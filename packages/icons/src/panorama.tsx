import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPanorama = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-502H149zm297-140-73-102q-8.308-10-19.154-10.5T335-472l-87 114q-9 12.75-2.375 25.375T267-320h427q15 0 21-12.625T713-358L596-517q-8.308-10-19.154-10T558-517zM149-229v-502z" />
  </Svg>
);
