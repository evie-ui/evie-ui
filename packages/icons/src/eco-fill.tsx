import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEcoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M448-56q-43 0-80.5-7.5T300-86q25-126 82-244t153-201q-116 58-199.5 161T215-140q-5-5-9.5-9t-9.5-9q-49-48-75-111T95-402q0-74 27.5-141T202-662q84-85 218.5-111t391.5-5q25 244-2 385T696-164q-50 52-114.5 80T448-56" />
  </Svg>
);
