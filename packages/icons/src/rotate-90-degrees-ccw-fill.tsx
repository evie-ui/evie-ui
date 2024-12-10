import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRotate90DegreesCcwFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M520-63q-38 0-73.5-9.5T377-99q-18-6-26-23.5t-2-35.5q6-18 22-27.5t34-3.5q26 16 55.5 24t59.5 8q118 0 200.5-82.5T803-440q0-106-68-186t-172-94h-25l26 27q11 13 6.5 28.5T553-637q-15 14-33.5 14T487-637L383-741q-7-7-10.5-15.5T369-774q0-9 3.5-17.5T383-807l104-104q14-14 33-14t33 14q15 15 15 33.5T553-845l-26 26h26q147 12 245.5 121T897-440q0 158-109.5 267.5T520-63M251-215q-10 0-18.5-3.5T217-229L39-407q-7-7-11-15.5T24-441q0-9 4-17.5T39-474l178-178q7-7 15.5-11t18.5-4q9 0 18 4t16 11l177 178q7 7 11 15.5t4 17.5q0 10-4 18.5T462-408L284-229q-7 7-15.5 10.5T251-215" />
  </Svg>
);
