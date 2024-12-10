import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMotionSensorIdle = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M836-85 36-886q-11-10-11-24.5T36-936q11-11 25.5-11T87-936l799 801q11 11 11 25t-11 25q-11 11-25 11t-25-11M147-864v118q0 19-13.5 32.5T101-700q-19 0-32.5-13.5T55-746v-117q0-19 8.5-36T94-929l65 65zm664 757H695q-19 0-33-14t-14-33q0-19 14-33t33-14h126l65 67q-20 13-38 20t-37 7M246-877l-81-81h101q19 0 32.5 14t13.5 34q0 9-3.5 18t-9.5 15zm660 661-79-80v-53q8-6 16.5-10t14.5-4q20 0 34 13.5t14 33.5zM149-106q-39 0-66.5-27.5T55-200v-116q0-20 13.5-33.5T102-363q20 0 33.5 13.5T149-316v116h116q20 0 33.5 13.5T312-153q0 20-13.5 33.5T265-106zm546-756q-20 0-33.5-13.5T648-909q0-20 13.5-34t33.5-14h116q39 0 67 28t28 67v116q0 20-14 33.5T858-699q-20 0-33.5-13.5T811-746v-116zM233-501q-21 0-32.5 19t-2.5 40q21 68 70.5 118.5T386-253q22 9 42-3.5t20-36.5q0-15-9-27t-23-18q-47-14-80-48.5T289-467q-8-16-23.5-25t-32.5-9m495-60q20 0 31-19t3-40q-22-68-70.5-118.5T575-809q-23-9-43 3.5T512-769q0 15 9 27t23 18q47 14 80 48.5t48 80.5q7 16 22.5 25t33.5 9m-494 0q-21 0-31.5-19t-2.5-40q11-35 31-64.5t53-54.5l61 61q-22 18-34.5 39T290-595q-7 16-22.5 25t-33.5 9m402 174 62 63q-29 24-59 42t-64 29q-23 9-43-3.5T512-293q0-15 9-27t24-18q23-7 44.5-19.5T636-387M393-730l-57-57q11-7 24-13t27-8q23-10 43 3t20 37q0 5-1 10t-5 8q-13 3-25.5 8T393-730m335 230q20 0 31 18.5t3 40.5q-4 14-10 27.5T739-388l-57-54q7-12 12-25t8-26q6-4 12.5-5.5T728-500" />
  </Svg>
);
