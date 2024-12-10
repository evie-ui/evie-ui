import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLiveHelpFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M350-135H189q-39.05 0-66.525-27.975Q95-190.95 95-229v-582q0-39.463 27.475-67.231Q149.95-906 189-906h582q38.463 0 66.731 27.769Q866-850.463 866-811v582q0 38.05-28.269 66.025Q809.463-135 771-135H611l-97 97q-14.364 14-34.182 14T446-38zm140-149q18 0 32-13.92T536-331q0-18-14-32t-32.5-14q-18.5 0-32 14T444-330.5q0 18.5 13.63 32.5T490-284m54-347q0 17-10.5 33.5T507-565q-21 20-32.5 33.276-11.5 13.275-16.5 26.561-3 7.163-5 16.663t-3 19.5q-3 14.189 8.25 25.595Q469.5-432 484.167-432q12.833 0 23.987-9.459Q519.308-450.919 526-468q4-15 13.972-30.058T567-529q26-26 39-51.267 13-25.267 13-58.382Q619-695 584-725.5T495-756q-44.595 0-79.797 20Q380-716 359-684q-8 13-2.5 26.5T377-639q14 6 28.5 1.5T430-653q11.859-14.355 27.109-21.677Q472.359-682 490-682q28 0 41 14.115 13 14.116 13 36.885" />
  </Svg>
);
