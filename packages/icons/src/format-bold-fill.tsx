import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatBoldFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M332-175q-40 0-67-27.5T238-270v-421q0-40 27-67.5t67-27.5h195q75 0 126 48.5T704-622q0 30-17.5 67.5T623-497v8q57 19 78.5 63t21.5 80q0 60-50.5 115.5T533-175zm17-90h163q23 0 58.5-20t35.5-70q0-49-35-69.5T514-445H349zm0-266h156q29 0 57.5-23t28.5-60q0-34-26.5-59T504-698H349z" />
  </Svg>
);
