import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBook3Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M278-55q-60 0-101.5-41.5T135-198v-564q0-60 41.5-102T278-906h453q40 0 67.5 27.5T826-811v540q0 5-4.5 10t-9.5 7q-16 7-24.5 22.5T779-198q0 17 8.5 32t24.5 23q10 5 12 17t2 24v5q0 17-13 29.5T782-55zm146-441h109l13 36q2 9 9.5 14.5T573-440q16 0 25.5-13t4.5-29l-79-216q-4-10-12.5-16t-19.5-6h-25q-11 0-20 6t-12 16l-79 219q-6 15 3 27t25 12q9 0 17-5.5t11-15.5zm18-56 35-101h3l34 101zM278-142h428q-7-12-10.5-26.5T692-198q0-16 4-30t11-27H278q-24 0-40 16.5T222-198q0 24 16 40t40 16" />
  </Svg>
);
