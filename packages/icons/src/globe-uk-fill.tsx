import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGlobeUkFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.384-150q18.459 0 35.902-2T550-158.263l-49.638-74.508H357v-41.095q0-33.903 23.794-58.018Q404.587-356 438.584-356H521v-124h-81.21q-16.407 0-29.598-12.521Q397-505.042 397-522.333V-604h-18.456q-26.658 0-45.101-18.203Q315-640.406 315-667.451q0-9.361 2.5-18.58Q320-695.25 326-703l63-94q-104.082 29.866-171.541 116.626T150-480h41v-41.596Q191-538 203.14-550.5t28.608-12.5h82.497q16.467 0 29.611 12.5Q357-538 357-521.621v41.54Q357-463 344-451t-29.239 12v41.621q0 34.337-24.255 57.858Q266.25-316 232.189-316H194q44.384 74.923 119.248 120.462Q388.112-150 479.384-150M793.27-379q7.73-24 12.23-49.288 4.5-25.288 4.5-52.124 0-115.336-69.983-203.536Q670.033-772.148 563-800v113.444q33.667 0 58.141 24.17 24.475 24.169 24.475 58.108V-522q19.384 0 34.884 5.196Q696-511.609 710-497zM480.404-55q-88.872 0-166.125-33.084-77.254-33.083-135.183-91.012-57.929-57.929-91.012-135.119Q55-391.406 55-480.362q0-88.957 33.084-166.285 33.083-77.328 90.855-134.809 57.772-57.482 135.036-91.013Q391.238-906 480.279-906q89.04 0 166.486 33.454 77.446 33.453 134.853 90.802 57.407 57.349 90.895 134.877Q906-569.34 906-480.266q0 89.01-33.531 166.247-33.531 77.237-91.013 134.86-57.481 57.623-134.831 90.891Q569.276-55 480.404-55" />
  </Svg>
);
