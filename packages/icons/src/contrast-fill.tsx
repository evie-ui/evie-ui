import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgContrastFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.054-55Q392-55 314.612-88.283q-77.388-33.282-135.196-91.052-57.807-57.771-91.112-135.191Q55-391.947 55-479.974 55-568 88.5-645.5q33.5-77.5 91-135T314.489-872q77.49-34 165.594-34 88.105 0 165.511 34Q723-838 780.5-780.5T872-645.51q34 77.489 34 165.593 0 88.105-34 165.511Q838-237 780.5-179.5t-134.946 91Q568.109-55 480.054-55M509-151q130-12 216-102.974t86-226q0-132.288-86-224.157T509-809z" />
  </Svg>
);
