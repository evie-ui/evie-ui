import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFullCoverageFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M140-74q-39.05 0-66.525-27.769Q46-129.538 46-169v-464q0-20 13.5-33.5T93-680q20 0 33.5 13.5T140-633v464h590q20 0 33.5 13.5t13.5 34q0 20.5-13.5 34T730-74zm204-206q-39.462 0-67.231-27.475Q249-334.95 249-374v-442q0-20 13.5-33.5T296-863h611q19.875 0 33.938 13.5Q955-836 955-816v442q0 39.05-27.769 66.525Q899.463-280 860-280zm104-202h96q13 0 21.5-8.5T574-512v-155q0-13-8.5-21.5T544-697h-96q-13 0-21.5 8.5T418-667v155q0 13 8.5 21.5T448-482m213 0h80q18 0 31-13t13-31q0-18-13-31t-31-13h-80q-18 0-31 13t-13 31q0 18 13 31t31 13m0-127h80q18 0 31-13t13-31q0-18-13-31t-31-13h-80q-18 0-31 13t-13 31q0 18 13 31t31 13" />
  </Svg>
);
