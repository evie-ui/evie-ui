import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPictureInPictureCenter = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-502H149zm210-122h241q19.75 0 33.375-13.625T647-398v-163q0-19.75-13.625-33.375T600-608H359q-19.75 0-33.375 13.625T312-561v163q0 19.75 13.625 33.375T359-351M149-229v-502z" />
  </Svg>
);
