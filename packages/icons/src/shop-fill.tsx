import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShopFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m456-286 134-88q22-14.286 22-39.143T590-452l-133-90q-23-15-48-1.674T384-502v176q0 28.87 24.5 42.435Q433-270 456-286M149-95q-39.05 0-66.525-27.475Q55-149.95 55-189v-497q0-19.875 13.5-33.938Q82-734 102-734h195v-100q0-38 27.475-66T391-928h178q39.05 0 66.525 28Q663-872 663-834v100h195q19.875 0 33.938 14.062Q906-705.875 906-686v497q0 39.05-27.769 66.525Q850.463-95 811-95zm242-639h178v-100H391z" />
  </Svg>
);
