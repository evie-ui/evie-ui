import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHowToReg = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M540-122H146q-39.8 0-66.9-27.625Q52-177.25 52-216v-27q0-40.066 21.672-74.944T134-371q72-32 137.5-47T397-433q29 0 73 5.5t78 14.5l-80 80q-18.594-3-36.297-4Q414-338 397-338q-54.772 0-102.886 10.5t-115.757 38.241q-17.161 8.185-24.759 22.018Q146-253.407 146-239v23h300zm105-100 189-188q10-11 24-11t25 11q11 11 11 25t-11 25L679-156q-14.455 14-33.727 14Q626-142 612-156l-91-91q-11-11-11-24.5t12-24.5q10-11 24-11t25 11zM396.796-495q-77.203 0-126-48.796Q222-592.593 222-669.796 222-747 270.796-796q48.797-49 126-49Q474-845 523.5-796T573-669.796q0 77.203-49.5 126Q474-495 396.796-495m0-94Q432-589 455-611.846t23-58.119q0-35.685-22.796-58.36-22.797-22.675-58-22.675Q362-751 339-728.279t-23 57.819q0 35.51 22.796 58.485 22.797 22.975 58 22.975m.204-81" />
  </Svg>
);
