import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextFieldsAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M127-180h706q20 0 33.5 13.5T880-133q0 20-13.5 33.5T833-86H127q-20 0-33.5-13.5T80-133q0-20 13.5-33.5T127-180m653-132v-497q0-13 9.5-22t22.5-9q13 0 22 9t9 22v498q0 13-9 22t-22 9q-13 0-22.5-9.5T780-312M294-420l-44 110q-6 13-18 21.5t-26 8.5q-28 0-42.5-22t-3.5-48l194-458q6-14 18.5-23t28.5-9h44q15 0 28.5 9t19.5 24l188 456q10 26-5.5 48.5T633-280q-18 0-31-10t-19-26l-41-104zm27-74h195l-95-252h-4z" />
  </Svg>
);
