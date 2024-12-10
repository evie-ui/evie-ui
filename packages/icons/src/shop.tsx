import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgShop = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m456-286 134-88q22-13.714 22-38.857T590-452l-133-90q-23-15-48-1.848T384-502v176q0 29.217 24.5 42.609Q433-270 456-286M149-95q-39.05 0-66.525-27.475Q55-149.95 55-189v-497q0-19.625 13.625-33.812Q82.25-734 102-734h195v-100q0-38 27.475-66T391-928h178q39.05 0 66.525 28Q663-872 663-834v100h195q19.625 0 33.812 14.188Q906-705.625 906-686v497q0 39.05-27.769 66.525Q850.463-95 811-95zm0-94h662v-450H149zm242-545h178v-100H391zM149-189v-450z" />
  </Svg>
);
