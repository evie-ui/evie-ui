import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSensorWindow = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M237-63q-39.05 0-66.525-27.475Q143-117.95 143-157v-646q0-39.05 27.475-66.525Q197.95-897 237-897h486q39.05 0 66.525 27.475Q817-842.05 817-803v646q0 39.05-27.475 66.525Q762.05-63 723-63zm0-464h156v-40h174v40h156v-276H237zm0 94v276h486v-276zm0 276h486z" />
  </Svg>
);
