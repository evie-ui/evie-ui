import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgIframe = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M474-434h173v-53H474zm-40 87q-20 0-33.5-13.5T387-394v-132q0-19.875 13.5-33.938Q414-574 434-574h252q19.875 0 33.938 14.062Q734-545.875 734-526v132q0 20-14.062 33.5Q705.875-347 686-347zM149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-402H149z" />
  </Svg>
);
