import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNightlight = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M580-55q-92.886 0-176.443-33Q320-121 257.632-179.563q-62.369-58.563-99-137.808Q122-396.616 122-488.083 122-580 158.5-659t99-137.5Q320-855 403.557-889 487.114-923 580-923q37.667 0 74.333 9 36.667 9 71.758 23.526Q740-885 747.5-872.827q7.5 12.172 7.5 24.925 0 10.022-3.833 19.917Q747.333-818.091 738-811q-73 62-120 144.5t-47 178.02q0 94.4 48 174.94Q667-233 736-166q8.867 6.562 13.433 16.248Q754-140.066 754-129.811q0 13.592-7.5 26.202Q739-91 725.091-85.526 690-71 653.966-63 617.933-55 580-55m0-94q9.548 0 20.274-.5T617-149q-63-71-102-158.5t-39-181q0-93.5 39-180.5t102-159q-6 1-17.226.5-11.226-.5-19.774-.5-148.247 0-256.123 99.279Q216-629.442 216-488.221T323.877-248Q431.753-149 580-149M476-489" />
  </Svg>
);
