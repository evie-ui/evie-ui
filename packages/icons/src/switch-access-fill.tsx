import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSwitchAccessFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M310.825-771q-19.275 0-33.05-14.061Q264-799.123 264-818.561 264-838 278.061-852q14.062-14 33.5-14Q331-866 345-851.762t14 33.937q0 19.275-14.238 33.05Q330.524-771 310.825-771m338.614 0Q630-771 616-785.061q-14-14.062-14-33.5Q602-838 616.238-852t33.937-14q19.275 0 33.05 14.238Q697-837.524 697-817.825q0 19.275-14.061 33.05Q668.877-771 649.439-771m-508 169Q122-602 108.5-616.238T95-650.175q0-19.275 13.86-33.05Q122.719-697 141.86-697 161-697 175-682.939q14 14.062 14 33.5Q189-630 174.939-616q-14.062 14-33.5 14m676.386 0q-19.275 0-33.05-14.238Q771-630.476 771-650.175q0-19.275 14.061-33.05Q799.123-697 818.561-697 838-697 852-682.939q14 14.062 14 33.5Q866-630 851.762-616t-33.937 14M141.439-264Q122-264 108.5-278.061 95-292.123 95-311.561 95-331 108.86-345q13.859-14 33-14Q161-359 175-344.762t14 33.937q0 19.275-14.061 33.05Q160.877-264 141.439-264m676.386 0q-19.275 0-33.05-14.061Q771-292.123 771-311.561 771-331 785.061-345q14.062-14 33.5-14Q838-359 852-344.762t14 33.937q0 19.275-14.238 33.05Q837.524-264 817.825-264m-507 169q-19.275 0-33.05-13.86Q264-122.719 264-141.86 264-161 278.061-175q14.062-14 33.5-14Q331-189 345-174.939q14 14.062 14 33.5Q359-122 344.762-108.5T310.825-95m338.614 0Q630-95 616-108.86q-14-13.859-14-33Q602-161 616.238-175t33.937-14q19.275 0 33.05 14.061Q697-160.877 697-141.439 697-122 682.939-108.5 668.877-95 649.439-95M359-264q-40.212 0-67.606-27.394Q264-318.788 264-359v-243q0-40.213 27.394-67.606Q318.788-697 359-697h243q40.213 0 67.606 27.394Q697-642.213 697-602v243q0 40.212-27.394 67.606Q642.213-264 602-264z" />
  </Svg>
);
