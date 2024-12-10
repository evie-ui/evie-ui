import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGridOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M829.421-28.737 763-95H649v-114l-60-60v174H371v-217h175l-60.343-60.342H371.343v-114.316L311-547v175H95v-216h174l-60-60H95v-115l-81-81Q3-854 3.5-868.5T15-894q11-11 25.5-11T66-894L881-79q10 10.454 10.5 24.727T881-29q-11 11-26 11t-25.579-10.737M189-95q-40.05 0-67.025-26.975Q95-148.95 95-189v-123h216v217zm677-83L732-312h134zM671-372l-22-22v-194h217v216zm-82-83L455-588h134zM396-648l-25-24v-194h218v218zm253 0v-218h122q40.463 0 67.731 27.269Q866-811.463 866-771v123zm-338-85L178-866h133z" />
  </Svg>
);
