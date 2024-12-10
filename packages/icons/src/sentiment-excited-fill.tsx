import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSentimentExcitedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.168-240Q550-240 599-289t49-119v-32q0-19.625-14.188-33.812Q619.625-488 600-488H360q-19.75 0-33.375 14.188Q313-459.625 313-440v32q0 70 49.168 119t118 49m.015-75Q442-315 415-342q-27-27-27-66v-5h185v5q0 39-26.817 66t-66 27M340-673q-35 0-63 21.5T234-598q-6 13 2 26t23 16q14 4 26.5-2.5T307-578q6-8 14.643-14t18.5-6q10.857 0 19.357 6.5T374-576q8 12 21 18t27 2q15-3 22.5-15.5T447-597q-14.576-33-42.788-54.5Q376-673 340-673m280 0q-35 0-63 21.5T514-598q-6 13 2 26t23 16q14 4 26.5-2.5T587-578q6-8 14.643-14t18.5-6q10.857 0 19.357 6.5T654-576q8 12 21 18t27 2q15-3 22.5-15.5T727-597q-14.576-33-42.788-54.5Q656-673 620-673M480.138-55Q392-55 314.5-88T179-179q-58-58-91-135.362t-33-165.5Q55-568 88-645.5t90.843-135.553q57.843-58.052 135.278-91.5Q391.557-906 479.779-906q88.221 0 165.839 33.37 77.619 33.37 135.596 91.29 57.978 57.92 91.382 135.46T906-480q0 88.276-33.447 165.76-33.448 77.483-91.5 135.362Q723-121 645.638-88t-165.5 33" />
  </Svg>
);