import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPackage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m397-587 52-26q14.902-7 30.951-7T511-613l52 26v-184H397zm-84 328q-23 0-38.5-15.5t-15.5-38q0-22.5 15.5-38T313-366h114q21.875 0 37.438 15.562Q480-334.875 480-313q0 23-15.562 38.5Q448.875-259 427-259zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-676v582zm0 582h582v-582H650v248q0 26-22 40t-46 2l-102-50-102 50q-24 12-46-2t-22-40v-248H189z" />
  </Svg>
);
