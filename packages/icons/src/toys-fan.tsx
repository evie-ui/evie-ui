import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgToysFan = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-480q0-97 68.855-166 68.856-69 166-69Q812-715 881-646.102 950-577.205 950-480zM245.145-245Q148-245 79-313.898 10-382.795 10-480h470q0 97-68.855 166-68.856 69-166 69M480-480q-97 0-166-68.855-69-68.856-69-166Q245-812 313.898-881 382.795-950 480-950zm0 470v-470q97 0 166 68.855 69 68.856 69 166Q715-148 646.102-79 577.205-10 480-10" />
  </Svg>
);
