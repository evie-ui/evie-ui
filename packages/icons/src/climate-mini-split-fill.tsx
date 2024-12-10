import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgClimateMiniSplitFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M152-458q-39.8 0-66.9-27.1Q58-512.2 58-552v-262q0-40.213 27.1-67.606Q112.2-909 152-909h656q40.213 0 67.606 27.394Q903-854.213 903-814v262q0 39.8-27.394 66.9Q848.213-458 808-458h-95v-167q0-38.75-27.625-66.375T619-719H342q-40.212 0-67.606 27.625Q247-663.75 247-625v167zm182 0v-174h292v174zm99 278v-160q0-19.625 13.675-33.812Q460.351-388 480.175-388 500-388 513.5-373.812 527-359.625 527-340v160q0 19.75-13.675 33.375Q499.649-133 479.825-133 460-133 446.5-146.625 433-160.25 433-180m-280 6q-19.75 0-33.375-13.675Q106-201.351 106-221.088q0-19.737 13.625-33.824Q133.25-269 153-269q23.647 0 45.324-9Q220-287 238-304q7.69-7.851 14.172-18.33Q258.655-332.809 263-344q9-18 23.53-31 14.529-13 33.488-13Q338-388 350.5-377.212T363-350q0 26.593-19.982 61.13-19.982 34.537-37.844 52.696Q274-205 234.814-189.5T153-174m656 0q19.75 0 33.375-13.675Q856-201.351 856-221.088q0-19.737-13.625-33.824Q828.75-269 809-269q-25 0-46.639-9-21.64-9-38.361-26-9-8-15.368-18.432Q702.263-332.865 698-344q-8-18-22.786-31-14.785-13-34.107-13Q624-388 611-377.212T598-350q0 26.689 20 61.344 20 34.656 38.826 52.482Q688-205 726.624-189.5T809-174" />
  </Svg>
);
