import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLabel = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M827-425 687-228q-18 25-42.955 39-24.954 14-54.045 14H189q-38.775 0-66.388-27.612Q95-230.225 95-269v-422q0-39.188 27.612-67.094Q150.225-786 189-786h401q29.091 0 54.056 15 24.966 15 42.944 39l140 197q18 25.141 18 55.07Q845-450 827-425M601-269l147-211-147.188-211H189v422zM189-691v422z" />
  </Svg>
);
