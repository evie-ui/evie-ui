import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBorderColorFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M151 0q-29.75 0-50.375-21.385T80-72.885Q80-103 101.419-123.5 122.838-144 153-144h656q29.75 0 50.375 20.677T880-72.823Q880-43 858.581-21.5T807 0zm8-312.062v-63.926q0-10.012 3-18.512t10-15.5l475-476q11-11 23.5-15.5T696-906q13 0 26 4.5t23 14.5l35 33q11 10 16.5 23.5t5.5 26.855q0 13.645-5.304 26.108Q791.391-765.073 781-755L304-278q-7 7-15.217 10.5Q280.565-264 272-264h-65.673q-19.889 0-33.608-13.643Q159-291.286 159-312.062M680-757l48-47-29-30-49 48z" />
  </Svg>
);
