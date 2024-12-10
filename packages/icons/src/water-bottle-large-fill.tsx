import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWaterBottleLargeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M281-52q-39.8 0-66.9-27.1Q187-106.2 187-146v-95q0-26.513 16.625-47.256Q220.25-309 247-314h20v-182h-20q-26.75-5-43.375-25.625T187-570v-94q0-40.213 27.1-67.606Q241.2-759 281-759h112v-62h-20q-13.75-4-21.875-16.313Q343-849.626 343-866.175 343-886 356.625-899.5 370.25-913 390-913h180q19.75 0 33.375 14.175 13.625 14.176 13.625 35 0 15.825-8.125 27.325T587-821h-20v62h112q40.213 0 67.606 27.394Q774-704.213 774-664v94q0 27.75-17.125 48.375T714-496h-20v182h20q25.75 5 42.875 25.744Q774-267.513 774-241v95q0 39.8-27.394 66.9Q719.213-52 679-52z" />
  </Svg>
);
