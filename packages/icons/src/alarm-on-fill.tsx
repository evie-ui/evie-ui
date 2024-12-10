import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlarmOnFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m433-398-64-66q-12-11-27.857-11t-27 11.368q-11.143 11.369-10.643 27Q304-421 315-409l85 82q14.091 13 33.545 13Q453-314 467-328l171.802-171.802Q650-511 650-526.632q0-15.631-11-26Q628-563 613-562.5T587-552zm46 341q-79 0-149-30t-122.5-82Q155-221 125-291.228T95-441q0-79 30-149t82.5-122.5Q260-765 330-795.5T479-826q79 0 149 30.5t122.5 83Q803-660 833.5-590T864-441q0 80-30.5 150t-83 122Q698-117 628-87T479-57M43.343-695Q32-706.267 33-720.133 34-734 45-746l133-129q11-10 25.5-9.5t24.5 10.843q12 11.344 11.5 25.329Q239-834.343 227-823L94-694q-11.343 11-25.828 10.5T43.343-695m871.314 0q-10.344 11-24.829 11.5Q875.343-683 864-694L731-823q-12-10.343-12.5-24.828t11.5-25.829Q740-884 754.5-884.5t26.148 10.148L914-745q11 10.511 11.5 24.756Q926-706 914.657-695" />
  </Svg>
);
