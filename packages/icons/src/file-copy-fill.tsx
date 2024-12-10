import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFileCopyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M791-171H301q-39 0-67-28t-28-67v-583q0-39 28-66.5t67-27.5h298q19 0 36.5 7.5T667-915l190 190q13 14 20.5 31.5T885-657v391q0 39-28 67t-66 28m0-510L619-849v97q0 30 20.5 50.5T690-681zM146-17q-39 0-66.5-27.5T52-111v-563q0-20 13.5-33.5T99-721q20 0 33.5 13.5T146-674v563h458q20 0 33.5 13.5T651-64q0 20-13.5 33.5T604-17z" />
  </Svg>
);
