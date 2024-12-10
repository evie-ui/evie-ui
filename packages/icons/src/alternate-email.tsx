import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAlternateEmail = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479-55q-87.712 0-164.856-33Q237-121 179-179T88-314.445q-33-77.446-33-165.501Q55-568 88-645.5t90.843-135.553q57.843-58.052 135.362-91.5Q391.724-906 479.862-906t165.756 33.37q77.619 33.37 135.596 91.29 57.978 57.92 91.382 135.198T906-481v52.504q0 62.144-45.607 103.82Q814.786-283 751-283q-39.33 0-73.165-18.5Q644-320 627-354q-24 37-63.339 54t-83.355 17q-82.911 0-140.608-56.966Q282-396.933 282-480.481q0-83.547 57.457-141.033Q396.914-679 479.76-679q82.845 0 140.542 57.49Q678-564.02 678-480v45.933q0 28.964 22.067 49.015Q722.133-365 751.477-365q28.91 0 49.716-20.052Q822-405.103 822-434.067V-481q0-141.956-100.022-241.478Q621.956-822 480-822q-141.956 0-241.978 100.022Q138-621.956 138-480q0 141.956 99.522 241.978Q337.044-138 479-138h174q18.125 0 29.562 11.979Q694-114.042 694-96.333 694-79 682.562-67 671.125-55 653-55zm1.235-310Q528-365 562-398.926q34-33.927 34-81.25Q596-529 561.765-563q-34.236-34-82-34Q432-597 398-562.823q-34 34.176-34 82.999 0 47.324 34.235 81.074 34.236 33.75 82 33.75" />
  </Svg>
);