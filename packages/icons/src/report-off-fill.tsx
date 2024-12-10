import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgReportOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M359-95q-20 0-37.5-7T291-122L123-290q-13-14-20.5-31.5T95-358v-243q0-19 7.5-37t20.5-31l29-28L38-809q-11-11-10.5-25T38-859q11-11 25-11t25 11L860-88q10 11 10 25t-11 25q-11 11-25 11t-25-11L698-150l-30 29q-13 13-30.5 19.5T601-95zm121-169q19 0 32.5-13.5T526-310q0-19-13.5-32.5T480-356q-19 0-32.5 13.5T434-310q0 19 13.5 32.5T480-264m317 13L516-531v-135q0-15-10-25.5T480-702q-13 0-22.5 8T445-674v72L251-797l40-40q13-13 31-21t37-8h242q19 0 37 8t31 21l168 168q13 13 21 31t8 37v243q0 19-8 36.5T837-290z" />
  </Svg>
);
