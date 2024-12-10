import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgClockLoader80Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.054-55Q392-55 314.5-88T179-179q-58-58-91-135.445-33-77.446-33-165.501Q55-568 88-645.5t90.843-135.553q57.843-58.052 135.362-91.5Q391.724-906 479.862-906t165.756 33.37q77.619 33.37 135.596 91.29 57.978 57.92 91.382 135.543Q906-568.173 906-479.917q0 88.193-33.447 165.677-33.448 77.483-91.5 135.362Q723-121 645.554-88q-77.445 33-165.5 33M149-480h331v-331q-138 0-234.5 96.312Q149-618.375 149-480" />
  </Svg>
);
