import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVideocam = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h502q39.463 0 67.231 27.769Q746-770.463 746-731v206l119-119q10-11 25.5-5.083Q906-643.167 906-628v296q0 15.167-15.5 21.083Q875-305 865-316L746-435v206q0 39.05-27.769 66.525Q690.463-135 651-135zm0-94h502v-502H149zm0 0v-502z" />
  </Svg>
);
