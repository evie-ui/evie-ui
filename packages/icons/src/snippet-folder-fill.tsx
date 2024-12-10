import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSnippetFolderFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-38.463 27.475-66.731Q109.95-826 149-826h222q18 0 36 8t31 21l43.454 43H811q38.463 0 66.731 27.975Q906-698.05 906-660v431q0 38.05-28.269 66.025Q849.463-135 811-135zm422-229v-161h49l56 56v105zm-51 75h208q9.85 0 16.425-6.68Q751-302.36 751-312.365V-481q0-9-3.5-17t-9.5-15l-73-73q-7-7-14.848-10.5Q642.304-600 632-600H520q-10.275 0-17.138 7.075Q496-585.85 496-576v264q0 9.85 7.075 16.425Q510.15-289 520-289" />
  </Svg>
);
