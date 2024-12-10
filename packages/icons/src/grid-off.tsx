import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGridOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M321-189v-132H189v132zm224 0v-124l-8-8H415v132zM321-415v-123l-8-7H189v130zm450 0v-130H640v130h-1zM545-640v-131H415v132-1zm226 0v-131H640v131zm95 451L189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-677L866-95zm641 66L14-844Q3-854 3.5-868.5T15-894q11-11 25.5-11T66-894L881-79q10 10.454 10.5 24.727T881-28.609Q870-18 855-18t-25-11" />
  </Svg>
);
