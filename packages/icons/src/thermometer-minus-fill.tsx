import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgThermometerMinusFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M590-633q-19.75 0-33.375-13.675Q543-660.351 543-680.175 543-700 556.625-713.5 570.25-727 590-727h260q19.75 0 33.375 13.675Q897-699.649 897-679.825 897-660 883.375-646.5 869.75-633 850-633zM320-95q-86.53 0-146.765-60.235Q113-215.47 113-302q0-52.099 23.5-97.05Q160-444 203-474v-274q0-49.333 33.765-83.667 33.764-34.333 83-34.333Q369-866 403.5-831.667 438-797.333 438-748v274q42 30 66 74.95 24 44.951 24 97.05 0 86.53-60.735 146.765Q406.53-95 320-95M207-302h226q0-40-20.5-73.5T355-424l-12-1v-323q0-9.6-6.7-16.3-6.7-6.7-16.3-6.7-9.6 0-16.3 6.7-6.7 6.7-6.7 16.3v323l-12 1q-37 15-57.5 48.595T207-302" />
  </Svg>
);
