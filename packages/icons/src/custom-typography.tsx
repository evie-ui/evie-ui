import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCustomTypography = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M524-135v39q0 18.125-12.175 29.563Q499.649-55 481.825-55 464-55 452.5-66.438 441-77.874 441-96v-161q0-17.425 11.488-29.212Q463.976-298 482.175-298 500-298 512-286.212q12 11.787 12 29.212v39h300q17.85 0 29.925 11.979T866-176.333Q866-159 853.925-147T824-135zm-388 0q-18.125 0-29.562-12.175Q95-159.351 95-176.684q0-17.334 11.438-29.325Q117.875-218 136-218h205q17.675 0 28.837 11.979Q381-194.042 381-176.333 381-159 368.875-147T339-135zm240-407h207l33.895 90.596q4.105 12.284 13.48 18.844 9.375 6.56 21.75 6.56Q672-426 683.5-442.717T688-478L529-882q-4-11-13.815-17.5-9.814-6.5-21.923-6.5h-27.945q-12.109 0-21.713 7Q434-892 430-881L272-476.181Q264-457 275.915-441.5q11.916 15.5 31.1 15.5 11.447 0 21.216-6.5 9.769-6.5 13.894-17.94zm23-65 80-225h1l79 225z" />
  </Svg>
);
