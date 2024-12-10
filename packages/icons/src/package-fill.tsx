import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPackageFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm189-386 102-50 102 50q24 12 46-2.25T650-523v-248H310v248q0 25.5 22 39.75t46 2.25m-65 222h114q21.875 0 37.438-15.5Q480-290 480-312.5t-15.562-38Q448.875-366 427-366H313q-23 0-38.5 15.562Q259-334.875 259-313q0 23 15.5 38.5T313-259" />
  </Svg>
);
