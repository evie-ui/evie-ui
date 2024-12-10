import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatItalicFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M263-174q-23.7 0-40.85-17.191Q205-208.382 205-232.141q0-23.339 17.15-40.099Q239.3-289 263-289h81l132-388h-95q-23.28 0-40.14-16.901T324-734.141q0-23.339 16.86-40.099Q357.72-791 381-791h300q23.28 0 40.14 16.901t16.86 40.24q0 23.339-16.86 40.099Q704.28-677 681-677h-81L468-289h95q23.28 0 40.14 17.007t16.86 40.5Q620-208 603.14-191q-16.86 17-40.14 17z" />
  </Svg>
);
