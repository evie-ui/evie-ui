import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArrowCircleLeftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M484-433h122q20 0 33.5-13.5T653-480q0-20-13.5-33.5T606-527H484l35-35q14-14 14-33t-14-33.5Q505-643 486-643t-34 15L338-514q-14 14.727-14 34.364Q324-460 338-446l115 115q14 14 33 14t33-14.5q14-14.5 14-33.5t-14-33zm-3.862 378Q392-55 314.513-88.084q-77.488-33.083-135.417-91.012T88.084-314.375Q55-391.724 55-479.862 55-569 88.084-646.487q33.083-77.488 90.855-134.969 57.772-57.482 135.195-91.013Q391.557-906 479.779-906q89.221 0 166.827 33.454 77.605 33.453 135.012 90.802 57.407 57.349 90.895 134.877Q906-569.34 906-480q0 88.276-33.531 165.747-33.531 77.471-91.013 135.278-57.481 57.808-134.831 90.891Q569.276-55 480.138-55" />
  </Svg>
);
