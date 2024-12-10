import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgJamboardKiosk = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M280-95q-19.75 0-33.375-13.675-13.625-13.676-13.625-34Q233-163 246.625-176.5 260.25-190 280-190h153v-125H149q-39.05 0-66.525-27.475Q55-369.95 55-409v-362q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v362q0 39.05-27.769 66.525Q850.463-315 811-315H527v125h153q19.75 0 33.375 13.675 13.625 13.676 13.625 34Q727-122 713.375-108.5 699.75-95 680-95zM149-409h662v-362H149zm0 0v-362z" />
  </Svg>
);
