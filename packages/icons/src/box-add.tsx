import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBoxAdd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-639h353-23 13zm465 0h117zm-431-87h513l-36.409-46H259zm171 290 86-43 87 43v-203H394zM577-95H189q-39.8 0-66.9-27.1Q95-149.2 95-189v-493q0-15.882 5.5-31.059 5.5-15.176 15.686-27.899L189-836q12.75-16.034 30.61-23.017Q237.471-866 258-866h444q19.497 0 37.37 6.983Q757.242-852.034 770-836l74.814 95.042Q854-728.235 860-713.059q6 15.177 6 31.059v206q-20-9-41.5-14t-44.5-6h-9v-143H654v172q-38 17-67.007 46.927Q557.985-390.146 542-351l-62-31-106 53q-23 12-45-2.5T307-372v-267H189v450h343q5 25.714 16.5 49.945Q560-114.825 577-95m185.825 12Q743-83 729.5-96.625 716-110.25 716-131v-72h-73q-19.75 0-33.375-13.675-13.625-13.676-13.625-34Q596-271 609.625-284.5 623.25-298 643-298h73v-73q0-19.75 13.675-33.375Q743.351-418 763.175-418 783-418 796.5-404.375 810-390.75 810-371v73h73q19.75 0 33.375 13.675 13.625 13.676 13.625 34Q930-230 916.375-216.5 902.75-203 883-203h-73v72q0 20.75-13.675 34.375Q782.649-83 762.825-83M189-639h353-23 13z" />
  </Svg>
);
