import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPlannerReview = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m202-315 105-505q3-14 14-23.5t26-9.5h18q14 0 25.5 9t14.5 23l119 556 71-309q2-14 14-23t26-9h20q14 0 25.5 8.5T696-575l63 260h92q17 0 28.5 11.5T891-275q0 17-11.5 29T851-234H732q-17 0-30-10t-16-26l-40-159-76 330q-3 14-13.5 22T532-69h-18q-14 0-24.5-8.5T477-100L357-652l-80 381q-3 17-16 27t-30 10H109q-17 0-28.5-12T69-275q0-17 12-28.5t29-11.5z" />
  </Svg>
);
