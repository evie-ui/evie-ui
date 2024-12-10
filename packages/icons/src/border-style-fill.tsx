import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBorderStyleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M817.825-602q-19.275 0-33.05-14.238Q771-630.476 771-650.175q0-19.275 14.061-33.05Q799.123-697 818.561-697 838-697 852-682.939q14 14.062 14 33.5Q866-630 851.762-616t-33.937 14m0 169q-19.275 0-33.05-13.675Q771-460.351 771-480.175 771-500 785.061-513.5q14.062-13.5 33.5-13.5Q838-527 852-513.325q14 13.676 14 33.5Q866-460 851.762-446.5 837.524-433 817.825-433m0 169q-19.275 0-33.05-14.061Q771-292.123 771-311.561 771-331 785.061-345q14.062-14 33.5-14Q838-359 852-344.762t14 33.937q0 19.275-14.238 33.05Q837.524-264 817.825-264m-507 169q-19.275 0-33.05-13.86Q264-122.719 264-141.86 264-161 278.061-175q14.062-14 33.5-14Q331-189 345-174.939q14 14.062 14 33.5Q359-122 344.762-108.5T310.825-95m169 0Q460-95 446.5-108.86q-13.5-13.859-13.5-33Q433-161 446.675-175q13.676-14 33.5-14Q500-189 513.5-174.939q13.5 14.062 13.5 33.5Q527-122 513.325-108.5 499.649-95 479.825-95m169.614 0Q630-95 616-108.86q-14-13.859-14-33Q602-161 616.238-175t33.937-14q19.275 0 33.05 14.061Q697-160.877 697-141.439 697-122 682.939-108.5 668.877-95 649.439-95m168.386 0q-19.275 0-33.05-13.86Q771-122.719 771-141.86 771-161 785.061-175q14.062-14 33.5-14Q838-189 852-174.939q14 14.062 14 33.5Q866-122 851.762-108.5T817.825-95M95-142v-629q0-40.213 27.1-67.606Q149.2-866 189-866h629q19.625 0 33.812 14.263 14.188 14.263 14.188 34Q866-798 851.812-784.5 837.625-771 818-771H189v629q0 19.75-13.675 33.375Q161.649-95 141.825-95 122-95 108.5-108.625 95-122.25 95-142" />
  </Svg>
);
