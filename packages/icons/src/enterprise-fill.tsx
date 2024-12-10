import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEnterpriseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-95q-39.05 0-66.525-27.475Q55-149.95 55-189v-450q0-39.463 27.475-67.231Q109.95-734 149-734h148v-100q0-38 27.475-66T391-928h178q39.05 0 66.525 28Q663-872 663-834v100h148q39.463 0 67.231 27.769Q906-678.463 906-639v450q0 39.05-27.769 66.525Q850.463-95 811-95zm242-639h178v-100H391zm88 395q32 0 54-21.5t22-53.5q0-32-22-53.5T479-489q-31 0-52.5 22T405-414q0 31 21.5 53t52.5 22" />
  </Svg>
);
