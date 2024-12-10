import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRunCircle = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M514-228v-144l-44-48-21 107-152-32 9-41 111 23 39-193-61 23v65h-41v-96.352L486-611q15-5 28.819.654Q528.639-604.692 536-590q23 46 53 62.5t46 18.5v41q-22-1-54.5-18T519-537l-16 93 52 56v160zm16.5-406q-14.9 0-25.7-10.725Q494-655.45 494-670q0-16.4 10.725-26.2T530-706q16.4 0 26.2 9.8t9.8 25.7q0 14.9-9.8 25.7-9.8 10.8-25.7 10.8M480.138-55Q392-55 314.513-88.084q-77.488-33.083-135.417-91.012T88.084-314.375Q55-391.724 55-479.862 55-569 88.084-646.487q33.083-77.488 90.855-134.969 57.772-57.482 135.195-91.013Q391.557-906 479.779-906q89.221 0 166.827 33.454 77.605 33.453 135.012 90.802 57.407 57.349 90.895 134.877Q906-569.34 906-480q0 88.276-33.531 165.747-33.531 77.471-91.013 135.278-57.481 57.808-134.831 90.891Q569.276-55 480.138-55M480-149q138 0 234.5-96.372T811-480q0-138-96.5-234.5t-235-96.5q-137.5 0-234 96.5t-96.5 235q0 137.5 96.372 234T480-149" />
  </Svg>
);
