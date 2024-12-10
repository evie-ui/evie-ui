import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgP2PFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39.8 0-66.9-27.1Q55-189.2 55-229v-582q0-40.213 27.1-67.606Q109.2-906 149-906h187q38.75 0 66.375 27.394Q430-851.213 430-811v207h-79v-81H133v330h297v126q0 39.8-27.625 66.9Q374.75-135 336-135zm463 80q-34.287 0-58.144-23.856Q530-102.713 530-136.584V-355h79v80h218v-329H530v-127q0-40.213 27.394-67.606Q584.787-826 625-826h186q40.213 0 67.606 27.394Q906-771.213 906-731v582q0 39.8-27.394 66.9Q851.213-55 811-55zM301.632-440Q285-440 273.5-451.868q-11.5-11.869-11.5-28.5Q262-497 273.868-508.5q11.869-11.5 28.5-11.5Q319-520 330.5-508.132q11.5 11.869 11.5 28.5Q342-463 330.132-451.5q-11.869 11.5-28.5 11.5m178 0Q463-440 451.5-451.868q-11.5-11.869-11.5-28.5Q440-497 451.868-508.5q11.869-11.5 28.5-11.5Q497-520 508.5-508.132q11.5 11.869 11.5 28.5Q520-463 508.132-451.5q-11.869 11.5-28.5 11.5m179 0Q642-440 630.5-451.868q-11.5-11.869-11.5-28.5Q619-497 630.868-508.5q11.869-11.5 28.5-11.5Q676-520 687.5-508.132q11.5 11.869 11.5 28.5Q699-463 687.132-451.5q-11.869 11.5-28.5 11.5" />
  </Svg>
);
