import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTabsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-288H189zm519.52-497q14.505 0 23.493-9.195Q741-704.39 741-717.982q0-13.593-9.2-22.805Q722.6-750 709-750H593.48q-14.505 0-23.493 9.195Q561-731.61 561-718.018q0 13.593 9.2 22.805Q579.4-686 593-686z" />
  </Svg>
);
