import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPauseCircle = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M395.07-314q14.905 0 24.917-10.062Q430-334.125 430-349v-262q0-14.875-10.088-24.938-10.087-10.062-25-10.062Q380-646 369.5-635.938 359-625.875 359-611v262q0 14.875 10.37 24.938Q379.74-314 395.07-314m171 0q14.905 0 24.917-10.062Q601-334.125 601-349v-262q0-14.875-10.088-24.938-10.087-10.062-25-10.062Q551-646 540.5-635.938 530-625.875 530-611v262q0 14.875 10.37 24.938Q550.74-314 566.07-314M480.404-55q-88.872 0-166.125-33.084-77.254-33.083-135.183-91.012-57.929-57.929-91.012-135.119Q55-391.406 55-480.362q0-88.957 33.084-166.285 33.083-77.328 90.855-134.809 57.772-57.482 135.036-91.013Q391.238-906 480.279-906q89.04 0 166.486 33.454 77.446 33.453 134.853 90.802 57.407 57.349 90.895 134.877Q906-569.34 906-480.266q0 89.01-33.531 166.247-33.531 77.237-91.013 134.86-57.481 57.623-134.831 90.891Q569.276-55 480.404-55m.096-94q137.5 0 234-96.372T811-480.5q0-137.5-96.312-234Q618.375-811 479.5-811q-137.5 0-234 96.312Q149-618.375 149-479.5q0 137.5 96.372 234T480.5-149m-.5-331" />
  </Svg>
);
