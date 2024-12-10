import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSpaFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M390-70q-110-34-205.5-130T62-456q-2-13 1.5-25T76-502q9-8 21.5-12.5T124-517q177 24 253 127t80 266q0 15-5 26.5T438-78q-9 7-21.5 9.5T390-70m90-334q-35-51-74-88t-89-58q5-73 41-161t82-160q9-12 19-17.5t21-5.5q11 0 22.5 5t18.5 17q48 73 83.5 165.5T643-550q-48 18-90.5 58T480-404m67 339q5-65 0-131t-16-113q36-77 107-133t197-75q15-2 27.5 2t21.5 13q9 8 13 20.5t1 26.5q-26 159-119.5 254.5T547-65" />
  </Svg>
);