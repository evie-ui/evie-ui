import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlarmSmartWakeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M320.175-393Q340-393 353.5-406.675q13.5-13.676 13.5-33.5Q367-460 353.325-473.5q-13.676-13.5-33.5-13.5Q300-487 286.5-473.325q-13.5 13.676-13.5 33.5Q273-420 286.675-406.5q13.676 13.5 33.5 13.5m160 0Q500-393 513.5-406.675q13.5-13.676 13.5-33.5Q527-460 513.325-473.5q-13.676-13.5-33.5-13.5Q460-487 446.5-473.325q-13.5 13.676-13.5 33.5Q433-420 446.675-406.5q13.676 13.5 33.5 13.5m160 0Q660-393 673.5-406.675q13.5-13.676 13.5-33.5Q687-460 673.325-473.5q-13.676-13.5-33.5-13.5Q620-487 606.5-473.325q-13.5 13.676-13.5 33.5Q593-420 606.675-406.5q13.676 13.5 33.5 13.5M479-57q-79 0-149-30t-122.5-82Q155-221 125-291.262T95-440.534Q95-520 125-590q30-70 82.5-122.5t122.5-83Q400-826 479-826t149 30.5q70 30.5 122.5 83t83 122.267q30.5 69.767 30.5 149.5T833.5-291q-30.5 70-83 122T628-87q-70 30-149 30M43.343-695Q32-706.267 33-720.133 34-734 45-746l133-129q11-10 25.5-9.5t24.5 10.843q12 11.344 11.5 25.329Q239-834.343 227-823L94-694q-11.343 11-25.828 10.5T43.343-695m871.314 0q-10.344 11-24.829 11.5Q875.343-683 864-694L731-823q-12-10.343-12.5-24.828t11.5-25.829Q740-884 754.5-884.5t26.148 10.148L914-745q11 10.511 11.5 24.756Q926-706 914.657-695" />
  </Svg>
);
