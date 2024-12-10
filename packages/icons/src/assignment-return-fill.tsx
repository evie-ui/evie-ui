import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAssignmentReturnFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M467-441h138q16 0 27.5-11.5T644-480q0-16-11.5-27T605-518H467l40-41q11-12 11.5-27T508-613q-12-11-27.5-11T453-613l-100 99q-14 14-14 34t14 34l100 99q12 12 27.5 11.5T508-348q12-11 11.5-27T507-403zM189-95q-39 0-66.5-27.5T95-189v-582q0-39 27.5-67t66.5-28h180q11-35 41-57.5t70-22.5q40 0 70 22.5t41 57.5h180q39 0 67 28t28 67v582q0 39-28 66.5T771-95zm291-696q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12" />
  </Svg>
);
