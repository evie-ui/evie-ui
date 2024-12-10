import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPieChart = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M527-527h279q-12-108-91-189t-188-90zm-94 373v-652q-121 16-202.5 108.991-81.5 92.99-81.5 217Q149-356 230.5-263 312-170 433-154m94 0q109-10 187.5-90.5T806-433H527zm-46.862 99q-88.024 0-165.581-33Q237-121 179-179q-58-58-91-135.445-33-77.446-33-165.501Q55-568 88-645.5t90.878-135.553q57.879-58.052 135.446-91.5Q391.891-906 480.083-906 569-906 646.28-872.436q77.279 33.564 135 91Q839-724 872.5-646.64 906-569.281 906-480q0 89.297-33.625 166.749t-91.267 134.776q-57.643 57.324-135.21 90.4Q568.331-55 480.138-55" />
  </Svg>
);