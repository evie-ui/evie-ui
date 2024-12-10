import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBox = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-639v450h582v-450H654v267q0 26-22.5 40.5T586-329l-106-53-106 53q-23 12-45-2.5T307-372v-267zm0 544q-39.8 0-66.9-27.1Q95-149.2 95-189v-493q0-15.882 5.5-31.059 5.5-15.176 15.686-27.899L189-836q12.75-16.034 30.61-23.017Q237.471-866 258-866h444q19.497 0 37.37 6.983Q757.242-852.034 770-836l74.814 95.042Q854-728.235 860-713.059q6 15.177 6 31.059v493q0 39.8-27.394 66.9Q811.213-95 771-95zm34-631h513l-36.409-46H259zm171 87v203l86-43 87 43v-203zm-205 0h582z" />
  </Svg>
);
