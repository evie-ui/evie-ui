import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHideImage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m866-223-95-94v-454H317l-94-95h548q39.463 0 67.231 27.769Q866-810.463 866-771zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-562l-45-45q-11-11-11.5-25.5T49.508-847q11.507-12 25.746-12 14.239 0 25.746 12l747 747q11 11 11.5 24.5T848-50q-11 11-25.5 11T797-50l-46-45zm391-173H269q-14.75 0-20.875-12.625T251-306l74-98q6-9 17-10t19 8l85 100 43-53-300-299v469h469zM424-424" />
  </Svg>
);
