import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSwitchAccessShortcutAdd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M743.223-421.223h-72.611q-12.585 0-21.099-8.564Q641-438.351 641-451.175q0-12.825 8.481-21.325 8.482-8.5 21.019-8.5H743v-73q0-11.75 8.675-20.875 8.676-9.125 21.5-9.125 12.825 0 21.325 9.125T803-554v73h73q11.75 0 20.875 8.675 9.125 8.676 9.125 21.5 0 12.825-9.125 21.325T876-421h-73v72.5q0 12.538-8.675 21.019-8.676 8.481-21.5 8.481-12.825 0-21.213-8.513-8.389-8.514-8.389-21.099zM522-737q-55 48-85.5 115.181T406-480q0 92.402 43.773 171.514Q493.545-229.374 572-180q17.32 10.65 24.66 29.325 7.34 18.675-2.617 35.48-11.009 17.459-31.526 22.827Q542-87 524-98q-99-62-155.5-163.341Q312-362.683 312-480q0-94.458 38.043-181.033Q388.087-747.608 459-811H351q-19.75 0-33.375-13.675Q304-838.351 304-858.088q0-19.737 13.625-33.824Q331.25-906 351-906h219q19.75 0 33.375 14.188Q617-877.625 617-858v218q0 19.75-13.675 33.375-13.676 13.625-34 13.625Q549-593 535.5-606.625 522-620.25 522-640z" />
  </Svg>
);
