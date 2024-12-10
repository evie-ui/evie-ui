import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBrokenImage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm42-366 133-132q14.455-14 33.727-14Q417-607 431-593l132 131 139-138q10.929-12 27.5-12 16.571 0 27.5 12l14 14v-185H189v268zm-42 272h582v-261l-43-44-131 132q-15.364 15-34.636 15-19.273 0-33.364-15L397-493 259-355q-12.273 12-28.636 12Q214-343 202-355l-13-13zm0 0v-261 94-415z" />
  </Svg>
);
