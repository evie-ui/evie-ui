import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTravel = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m258-256-100-57q-14-7-15.5-22.5T151-361l14-14q5-5 11.5-7.5t14.5-.5l85 13 158-158-281-154q-17-10-19.5-29t11.5-34l11-11q7-8 17.5-10.5t20.5.5l379 100 76-79q20-20 47.5-20t47.5 20q20 20 20 47.5T744-650l-76 78 99 378q3 11 .5 22T756-153l-6 6q-15 15-37 12t-32-22L530-432 371-274l13 82q1 8-1.5 16.5T375-161l-7 7q-13 12-30 9.5T312-163z" />
  </Svg>
);
