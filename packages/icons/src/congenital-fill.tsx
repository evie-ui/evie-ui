import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCongenitalFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M386-190q-103 0-191-52.5T59-387l-24-46q-13-24-10-51.5T46-533l199-240q11-13 25-22t29-12q16-3 32-.5t32 10.5l111 60 94-52q19-11 41-7.5t39 18.5q16 16 20 37.5t-5 41.5L539-410q-13 30-41 44t-60 7l-295-61q38 66 102.5 104.5T386-277h191q52 0 97.5-20t85.5-53h-35q-36-1-57.5-36T650-454l27-178q4-22 17.5-36.5T727-688q19-5 38 0t34 22l115 134q17 20 21 46.5t-8 49.5l-15 32q-46 98-136.5 156T577-190z" />
  </Svg>
);
