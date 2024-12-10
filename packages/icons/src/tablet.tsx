import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTablet = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M111-135q-38.775 0-66.388-27.612Q17-190.225 17-229v-502q0-39.188 27.612-67.094Q72.225-826 111-826h738q38.775 0 66.387 27.906Q943-770.188 943-731v502q0 38.775-27.613 66.388Q887.775-135 849-135zm30-596h-30v502h30zm60 502h558v-502H201zm618-502v502h30v-502zm0 0h30zm-678 0h-30z" />
  </Svg>
);
