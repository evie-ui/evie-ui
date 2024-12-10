import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCameraswitchFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M324-283q-30 0-50.5-20.5T253-354v-229q0-30 20.5-51t50.5-21h34l17-16q6-7 14-10.5t18-3.5h149q10 0 18 3.5t15 10.5l16 16h34q30 0 50.5 21t20.5 51v229q0 30-20.5 50.5T639-283zm157-130q23 0 38.5-15.5T535-468q0-23-15.5-38.5T481-522q-24 0-39 15.5T427-468q0 24 15 39.5t39 15.5M479 0Q306 0 175-108T8-382q-4-18 6-33.5T42-434q17-2 30.5 8T90-399q23 121 121.5 210T432-86l-35-36q-11-10-10.5-24.5T398-172q10-11 25-11.5t26 10.5L586-35q5 6 3.5 14.5T580-10q-25 5-51 7.5T479 0m4-960q173 0 303.5 109T952-578q4 19-5.5 34T919-527q-17 3-30.5-7.5T872-561q-24-121-122-210T529-874l36 35q10 11 10 25.5T565-788q-11 11-26 11.5T513-787L376-925q-6-6-4-14.5t10-10.5q25-5 51-7.5t50-2.5" />
  </Svg>
);