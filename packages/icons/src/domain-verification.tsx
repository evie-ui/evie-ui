import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDomainVerification = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h662v-418H149zm289-180 142.921-142.921Q592.217-563 607.229-563t25.392 11.172Q643-540.655 643-525.936T633-501L472-340q-14.727 14-34.364 14Q418-326 404-340l-76-77q-11-10.435-11-25.217Q317-457 327.672-468q10.673-11 25.5-11 14.828 0 26.007 11.179zM149-229v-502z" />
  </Svg>
);
