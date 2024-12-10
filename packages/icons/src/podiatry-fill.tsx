import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPodiatryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m727-316 241-241 33 32q14 15 14 34.5t-14 33.5L827-283q-14 14-33 14.5T761-282zm-753 55q0-34 12-64t44-40q30-9 60-20.5t58-28.5l60 60q3 6 10.5 6t13.5-7q4-3 3.5-9.5T232-377l-52-54q10-8 20-17t19-19l54 52q3 6 10 6t13-6q4-4 3.5-10.5T296-438l-55-55q10-10 18-21t13-25l62 65q2 6 9 5t13-7q5-3 5-10t-3-12l-67-66 86-141q3-5 6-8.5t8-7.5l140-140q27-28 66-28.5t67 27.5l269 269-468 454q-13 13-30.5 20t-36.5 7H68q-39 0-66.5-27T-26-206z" />
  </Svg>
);
