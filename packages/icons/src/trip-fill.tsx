import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTripFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M737-95v-639h74q39.463 0 67.231 27.769Q906-678.463 906-639v450q0 39.05-27.769 66.525Q850.463-95 811-95zM391-734h178v-100H391zM283-95v-639h14v-100q0-38 27.475-66T391-928h178q39.05 0 66.525 28Q663-872 663-834v100h14v639zm-134 0q-39.05 0-66.525-27.475Q55-149.95 55-189v-450q0-39.463 27.475-67.231Q109.95-734 149-734h74v639z" />
  </Svg>
);
