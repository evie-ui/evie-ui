import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMail = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm662-518L506.099-448.032Q499.188-444 493.094-442 487-440 480-440q-7 0-13.094-2-6.094-2-13.005-6.032L149-653v424h662zM480-513l327-218H154zM149-653v10-54.821 1.065V-731v34-1.912V-643zv424z" />
  </Svg>
);
