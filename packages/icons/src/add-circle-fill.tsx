import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAddCircleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M447-440v130q0 15.3 9.975 25.65 9.976 10.35 26.2 10.35 16.225 0 26.025-9.925 9.8-9.925 9.8-26.323V-440h131q15.3 0 25.65-9.975 10.35-9.976 10.35-26.2 0-16.225-9.925-26.025-9.925-9.8-26.323-9.8H519v-138q0-15.3-9.975-25.65-9.976-10.35-26.2-10.35-16.225 0-26.025 9.925-9.8 9.925-9.8 26.323V-512H310q-15.3 0-25.65 9.975-10.35 9.976-10.35 26.2 0 16.225 9.925 26.025 9.925 9.8 26.323 9.8zm33.404 385q-88.872 0-166.125-33.084-77.254-33.083-135.183-91.012-57.929-57.929-91.012-135.119Q55-391.406 55-480.362q0-88.957 33.084-166.285 33.083-77.328 90.855-134.809 57.772-57.482 135.036-91.013Q391.238-906 480.279-906q89.04 0 166.486 33.454 77.446 33.453 134.853 90.802 57.407 57.349 90.895 134.877Q906-569.34 906-480.266q0 89.01-33.531 166.247-33.531 77.237-91.013 134.86-57.481 57.623-134.831 90.891Q569.276-55 480.404-55" />
  </Svg>
);