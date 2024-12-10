import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTibiaFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M338-583.414 259-661q-19.914-20.172-30.457-45.776Q218-732.381 218-760.672 218-820 258.661-861.5T358-903h244q58.214 0 98.107 42.133Q740-818.733 740-759.601q0 27.601-11.122 54.093Q717.757-679.016 698-659l-75 75.257V-380l77 77q19.778 21.125 30.389 46.463T741-202.655Q741-142 699.483-100.5T598.469-59Q570-59 544.09-68.814 518.18-78.63 498-100q-3.029-2.6-7.725-4.8-4.696-2.2-10.221-2.2-5.535 0-10.295 1.5Q465-104 462-100q-20.125 19.914-46.169 30.457Q389.787-59 361.375-59 301-59 258.5-100.686T216-202.375q0-28.412 11.3-54.456Q238.6-282.875 259-303l79-77.177z" />
  </Svg>
);
