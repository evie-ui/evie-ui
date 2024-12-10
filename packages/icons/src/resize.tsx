import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgResize = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M141.439-771Q122-771 108.5-785.061 95-799.123 95-818.561 95-838 108.86-852q13.859-14 33-14Q161-866 175-851.762t14 33.937q0 19.275-14.061 33.05Q160.877-771 141.439-771m169.386 0q-19.275 0-33.05-14.061Q264-799.123 264-818.561 264-838 278.061-852q14.062-14 33.5-14Q331-866 345-851.762t14 33.937q0 19.275-14.238 33.05Q330.524-771 310.825-771m169 0Q460-771 446.5-785.061q-13.5-14.062-13.5-33.5Q433-838 446.675-852q13.676-14 33.5-14Q500-866 513.5-851.762q13.5 14.238 13.5 33.937 0 19.275-13.675 33.05Q499.649-771 479.825-771M141.439-602Q122-602 108.5-616.238T95-650.175q0-19.275 13.86-33.05Q122.719-697 141.86-697 161-697 175-682.939q14 14.062 14 33.5Q189-630 174.939-616q-14.062 14-33.5 14m0 169Q122-433 108.5-446.675 95-460.351 95-480.175 95-500 108.86-513.5q13.859-13.5 33-13.5Q161-527 175-513.325q14 13.676 14 33.5Q189-460 174.939-446.5q-14.062 13.5-33.5 13.5m676.386 0q-19.275 0-33.05-13.675Q771-460.351 771-480.175 771-500 785.061-513.5q14.062-13.5 33.5-13.5Q838-527 852-513.325q14 13.676 14 33.5Q866-460 851.762-446.5 837.524-433 817.825-433m0 169q-19.275 0-33.05-14.061Q771-292.123 771-311.561 771-331 785.061-345q14.062-14 33.5-14Q838-359 852-344.762t14 33.937q0 19.275-14.238 33.05Q837.524-264 817.825-264m-338 169Q460-95 446.5-108.86q-13.5-13.859-13.5-33Q433-161 446.675-175q13.676-14 33.5-14Q500-189 513.5-174.939q13.5 14.062 13.5 33.5Q527-122 513.325-108.5 499.649-95 479.825-95m169.614 0Q630-95 616-108.86q-14-13.859-14-33Q602-161 616.238-175t33.937-14q19.275 0 33.05 14.061Q697-160.877 697-141.439 697-122 682.939-108.5 668.877-95 649.439-95m168.386 0q-19.275 0-33.05-13.86Q771-122.719 771-141.86 771-161 785.061-175q14.062-14 33.5-14Q838-189 852-174.939q14 14.062 14 33.5Q866-122 851.762-108.5T817.825-95M771-650v-121H650q-20.75 0-34.375-13.675Q602-798.351 602-818.088q0-19.737 13.625-33.824Q629.25-866 650-866h121q40.213 0 67.606 27.394Q866-811.213 866-771v121q0 20.75-14.263 34.375t-34 13.625Q798-602 784.5-615.625 771-629.25 771-650M95-189v-122q0-19.75 13.675-33.375Q122.351-358 142.175-358 162-358 175.5-344.375 189-330.75 189-311v122h122q19.75 0 33.375 13.675Q358-161.649 358-141.825 358-122 344.375-108.5 330.75-95 311-95H189q-39.8 0-66.9-27.1Q95-149.2 95-189" />
  </Svg>
);
