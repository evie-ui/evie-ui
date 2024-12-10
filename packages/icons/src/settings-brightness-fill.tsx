import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSettingsBrightnessFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M427.81-344 462-308q7 7 17 7t17-7l36.556-36H600q9 0 16-7.5t7-16.5v-68l31-31q7-7.182 7-17.091T654-501l-32-30.556V-599q0-9-7-16t-16-7h-67.444L496-658q-7-6-17-6t-17 7l-34.19 35H363q-10.2 0-17.1 7-6.9 7-6.9 16v67.444L307-500q-7 7.182-7 17.091T307-466l31 30.556V-367q0 9 7.1 16t16.9 7zM479-368v-229q47 0 81 32.912t34 81.5Q594-434 560-401q-34 33-81 33M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135z" />
  </Svg>
);
