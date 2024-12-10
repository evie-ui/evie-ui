import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgShoppingBasketFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M225-95q-32 0-58-19t-34-49L20-566q-6-23 8-41.5T66-626h194l173-258q8-11 20-18t26-7q14 0 26 7t20 18l172 258h198q24 0 38 18.5t8 41.5L829-164q-8 31-33.5 50T738-95zm255-199q28 0 47-19t19-47q0-28-19-47t-47-19q-28 0-47 19t-19 47q0 28 19 47t47 19M371-626h216L478-781z" />
  </Svg>
);
