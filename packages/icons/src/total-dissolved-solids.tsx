import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTotalDissolvedSolids = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M141-468q25-120 122-230.5T448-886q7-6 15-9.5t17-3.5q9 0 17 3.5t15 9.5q88 77 185 187.5T819-468h-98q-21-67-81.5-148T480-787q-100 90-160 171t-80 148zm687 10q7 44 .5 86T803-293L585-75q-37 18-78.5 24T422-52zm-267 50h121L351-77q-22-7-41.5-17.5T272-119zm-218 0h121L222-168q-15-15-27-33t-22-37zm-208 0h111l-97 97q-8-22-11-47t-3-50m345-60" />
  </Svg>
);
