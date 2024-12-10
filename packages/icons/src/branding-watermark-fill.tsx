import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBrandingWatermarkFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M452-283h258q20 0 33.5-13.5T757-330v-164q0-20-13.5-33.5T710-541H452q-20 0-33.5 13.5T405-494v164q0 20 13.5 33.5T452-283M149-135q-39 0-66.5-27.5T55-229v-502q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 39-28 66.5T811-135z" />
  </Svg>
);
