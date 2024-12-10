import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRocketFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M179-59q-24 9-44.5-5T114-103v-184q0-29 13.5-54.5T165-383l68-47q7 97 25 170.5T308-110zm207-76q-14 0-27-9.5T339-172q-30-77-43-145.5T283-464q0-110 43-215t118-176q7-6 16.5-10t19.5-4q10 0 19.5 4t16.5 10q75 71 118 176t43 215q0 77-12.5 144T621-172q-7 18-19.5 27.5T575-135zm94-319q27 0 45.5-18.5T544-519q0-27-18.5-45.5T480-583q-27 0-45.5 18.5T416-519q0 28 18.5 46.5T480-454M782-59l-130-51q32-76 50-149.5T727-430l68 47q24 16 37.5 41.5T846-287v184q0 25-20.5 39T782-59" />
  </Svg>
);
