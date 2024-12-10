import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHangoutVideo = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M293-324h218q19.75 0 33.375-13.625T558-371v-76l100 78q18 15 37.5 5.2T715-397v-166q0-23.4-19.5-33.2Q676-606 658-592l-100 79v-76q0-19.75-13.625-33.375T511-636H293q-19.75 0-33.375 13.625T246-589v218q0 19.75 13.625 33.375T293-324M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-502H149zm0-502v502z" />
  </Svg>
);