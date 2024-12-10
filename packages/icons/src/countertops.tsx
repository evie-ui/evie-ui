import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCountertops = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M216-647h88v-98h-88zm0 431h224v-269H216zm305 0h224v-269H521zm-305 0h529v-269H216zm329.298-449Q528-665 516-676.787 504-688.575 504-706q0-49.75 35.76-84.875T625.676-826q49.741 0 84.427 35 34.686 35 34.686 85v140H865q16.7 0 28.85 11.702 12.15 11.702 12.15 29Q906-508 893.85-496.5T865-485h-39v256q0 39.8-27.394 66.9Q771.213-135 731-135H229q-39.8 0-66.9-27.1Q135-189.2 135-229v-256H95q-17 0-28.5-11.848T55-526.211q0-17.089 11.5-28.439Q78-566 95-566h119q-33.875 0-56.438-23.794Q135-613.587 135-647v-131q0-19.625 13.625-33.812Q162.25-826 182-826h156q19.75 0 33.375 14.188Q385-797.625 385-778v131q0 33.413-23.794 57.206Q337.413-566 304-566h360v-140q0-15.875-11.512-27.438Q640.976-745 624.684-745q-16.716 0-27.7 11.688Q586-721.625 586-707q0 17.85-11.702 29.925t-29 12.075M216-647h88z" />
  </Svg>
);