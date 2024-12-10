import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMergeTypeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M716-169q-14 15-33.5 15.5T649-168L456-359q-14-14-20-31.5t-6-36.5v-258l-73 72q-14 14-33.5 14T290-613q-14-14-14-33.5t14-33.5l152-153q7-6 16-10.5t19-4.5q9 0 17.5 4.5T510-833l151 152q14 14 14 33.5T661-614q-14 14-33.5 14.5T594-613l-70-72v259l192 191q14 15 14 33.5T716-169m-477 0q-14-14-14-32.5t14-33.5l95-96q14-14 33.5-14t33.5 14q14 15 14 34t-14 33l-95 95q-14 14-33.5 14T239-169" />
  </Svg>
);
