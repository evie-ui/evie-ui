import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDominoMask = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M313-207q-55.875 0-108.438-20.5Q152-248 109.871-287.25 57-337 33.5-405 10-473 10-545q0-91 47-149t134-59q17 0 33 3t31 8l227 86 226-86q15-5.5 31.538-8.25Q756.077-753 772-753q86 1 132 59t46 149q0 70.905-24 139.452-24 68.548-75.871 118.86Q808-248 755.5-227.5 703-207 647-207q-55 0-102.5-24.5T483-265h-5q-17 12-62.165 35Q370.671-207 313-207m1-80q41 0 74.797-16.5Q422.593-320 453-347h54q30.407 27 64.203 43.5Q605-287 647-287q39.951 0 80.476-15.5Q768-318 798-347.133q38-38.867 55.5-91.605Q871-491.475 871-544.68q0-55.32-25.042-91.82Q820.915-673 767-674q-14 0-34 8l-253 95-253-95q-8-3-17.5-5.5T192-674q-53.915 0-77.958 37Q90-600 90-544.911 90-491 106.5-439t56.5 92q30.152 30 69.576 45Q272-287 314-287m47-80q43.127 0 68.063-19.669Q454-406.339 454-442q0-53.58-69.216-102.79Q315.567-594 239-594q-42.658 0-67.329 19.935Q147-554.129 147-518q0 54 68.5 102.5T361-367m-6-68q-39 0-86-27.5T214-519q8-3 15-5t15-2q39 0 86.5 28t55.5 57q-8 3-15.5 4.5T355-435m244 69q76.567 0 145.784-49Q814-464 814-518q0-36.159-24.462-56.579Q765.076-595 721-595q-77 0-145.5 49.705T507-442q0 35.698 24.671 55.849Q556.342-366 599-366m5-69q-8 0-14.5-1.5T575-441q9-29 55-56.5t86-27.5q8 0 15 1.5t15 4.5q-9 29-55.5 56.5T604-435m-124-45" />
  </Svg>
);
