import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGlobe = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.404-55q-88.872 0-166.125-33.084-77.254-33.083-135.183-91.012-57.929-57.929-91.012-135.119Q55-391.406 55-480.362q0-88.957 33.084-166.285 33.083-77.328 90.855-134.809 57.772-57.482 135.036-91.013Q391.238-906 480.279-906q89.04 0 166.486 33.454 77.446 33.453 134.853 90.802 57.407 57.349 90.895 134.877Q906-569.34 906-480.266q0 89.01-33.531 166.247-33.531 77.237-91.013 134.86-57.481 57.623-134.831 90.891Q569.276-55 480.404-55M480-149q125.375 0 216.188-80Q787-309 805-427q0 2 .5 4.25t.5 2.75q-12 14-28.892 22T740-390h-75q-36.713 0-62.856-26.242Q576-442.483 576-479.333V-524H398v-82.584q0-37.778 26.242-63.597Q450.483-696 487.333-696H532v-22q0-21.345 15-48.672Q562-794 582-795q-24.016-6.545-49.573-11.273Q506.869-811 480.36-811 342-811 245.5-714.688 149-618.375 149-480q0 4 .5 7.5t.5 7.5h104q74 0 126 52t52 125.472V-243H299v48q40 21 85.825 33.5T480-149" />
  </Svg>
);
