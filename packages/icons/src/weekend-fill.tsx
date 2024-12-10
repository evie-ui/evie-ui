import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWeekendFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M144-137q-52.917 0-89.958-38.542Q17-214.083 17-268v-240q0-35.188 24-61.094T100.133-595q34.132 0 58 25.906Q182-543.188 182-508v179h596v-179q0-35 23.867-61t58-26Q895-595 919-569.094T943-508v240q0 53.917-36.542 92.458Q869.917-137 817-137zm98-252v-119q0-52-32-92.5T129-658v-33q0-53.917 37.042-92.958Q203.083-823 256-823h449q52.917 0 89.458 39.042Q831-744.917 831-691v33q-50 13-81.5 55T718-508v119z" />
  </Svg>
);
