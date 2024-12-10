import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPodiumFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M504-799q0 35-24.5 59T420-716q-12 0-23.5-3.5T375-730q-22 20-36.5 43T323-636h501q21 0 36 16t12 37l-32 240q-2 17-15.5 29T793-302h-79l7-48q6-82-33.5-129T590-526H370q-58 0-97.5 47T239-350l7 48h-79q-18 0-31.5-12T120-343L88-583q-3-21 12-37t36-16h101q0-53 28-98t73-75q4-32 27-53t55-21q35 0 59.5 24.5T504-799M384-99h192q18 0 31.5-12.5T623-142l25-247q2-25-15.5-43.5T590-451H370q-25 0-42 18.5T313-389l25 247q1 18 14.5 30.5T384-99" />
  </Svg>
);