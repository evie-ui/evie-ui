import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRewardedAdsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-517q37 0 62.5-25.5T568-605q0-37-25.5-62.5T480-693q-37 0-62.5 25.5T392-605q0 37 25.5 62.5T480-517m-230-9v-166H146v44q0 45 29.5 78.5T250-526m461 0q44-10 74-43.5t30-78.5v-44H711zM433-180v-117q-55-13-97.5-48.5T273-432q-92 2-157-60.815T51-648v-44q0-40.213 27.394-67.606Q105.787-787 146-787h104v-28q0-23.75 17.625-41.875T310-875h341q23.75 0 41.875 18.125T711-815v28h104q38.75 0 66.375 27.394Q909-732.213 909-692v44q0 92.37-65 155.185T687-432q-20 51-62.5 86.5T527-297v117h94q19.75 0 33.375 13.675Q668-152.649 668-132.825 668-113 654.375-99.5 640.75-86 621-86H339q-19.75 0-33.375-13.675Q292-113.351 292-133.175 292-153 305.625-166.5 319.25-180 339-180z" />
  </Svg>
);
