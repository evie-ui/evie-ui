import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHighDensityFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M817.825-771q-19.275 0-33.05-14.061Q771-799.123 771-818.561 771-838 785.061-852q14.062-14 33.5-14Q838-866 852-851.762t14 33.937q0 19.275-14.238 33.05Q837.524-771 817.825-771m0 169q-19.275 0-33.05-14.238Q771-630.476 771-650.175q0-19.275 14.061-33.05Q799.123-697 818.561-697 838-697 852-682.939q14 14.062 14 33.5Q866-630 851.762-616t-33.937 14m0 169q-19.275 0-33.05-13.675Q771-460.351 771-480.175 771-500 785.061-513.5q14.062-13.5 33.5-13.5Q838-527 852-513.325q14 13.676 14 33.5Q866-460 851.762-446.5 837.524-433 817.825-433m0 169q-19.275 0-33.05-14.061Q771-292.123 771-311.561 771-331 785.061-345q14.062-14 33.5-14Q838-359 852-344.762t14 33.937q0 19.275-14.238 33.05Q837.524-264 817.825-264M141.439-95Q122-95 108.5-108.86q-13.5-13.859-13.5-33Q95-161 108.86-175q13.859-14 33-14Q161-189 175-174.939q14 14.062 14 33.5Q189-122 174.939-108.5 160.877-95 141.439-95m169.386 0q-19.275 0-33.05-13.86Q264-122.719 264-141.86 264-161 278.061-175q14.062-14 33.5-14Q331-189 345-174.939q14 14.062 14 33.5Q359-122 344.762-108.5T310.825-95m169 0Q460-95 446.5-108.86q-13.5-13.859-13.5-33Q433-161 446.675-175q13.676-14 33.5-14Q500-189 513.5-174.939q13.5 14.062 13.5 33.5Q527-122 513.325-108.5 499.649-95 479.825-95m169.614 0Q630-95 616-108.86q-14-13.859-14-33Q602-161 616.238-175t33.937-14q19.275 0 33.05 14.061Q697-160.877 697-141.439 697-122 682.939-108.5 668.877-95 649.439-95m168.386 0q-19.275 0-33.05-13.86Q771-122.719 771-141.86 771-161 785.061-175q14.062-14 33.5-14Q838-189 852-174.939q14 14.062 14 33.5Q866-122 851.762-108.5T817.825-95M95-359v-412q0-40.213 27.1-67.606Q149.2-866 189-866h413q40.213 0 67.606 27.394Q697-811.213 697-771v412q0 40.212-27.394 67.606Q642.213-264 602-264H189q-39.8 0-66.9-27.394Q95-318.788 95-359" />
  </Svg>
);
