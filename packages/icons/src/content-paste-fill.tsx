import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgContentPasteFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-40.025 0-67.013-26.512Q95-148.025 95-189v-582q0-40.975 26.512-67.987Q148.025-866 189-866h174q11-36 43.206-59.5T480-949q40 0 72.5 23.5T598-866h173q40.975 0 67.987 27.013Q866-811.975 866-771v582q0 40.975-27.013 67.488Q811.975-95 771-95zm0-94h582v-582h-55v55q0 19.75-13.625 33.375T669-669H291q-19.75 0-33.375-13.625T244-716v-55h-55zm291-593q17 0 28.5-12t11.5-28q0-17-11.5-28.5T480-862q-17 0-28.5 11.5T440-822q0 16 11.5 28t28.5 12" />
  </Svg>
);
