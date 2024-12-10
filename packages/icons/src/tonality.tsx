import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTonality = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.054-55Q392-55 314.612-88.283q-77.388-33.282-135.196-91.052-57.807-57.771-91.112-135.191Q55-391.947 55-479.974 55-568 88.5-645.5q33.5-77.5 91-135T314.489-872q77.49-34 165.594-34 88.105 0 165.511 34Q723-838 780.5-780.5T872-645.51q34 77.489 34 165.593 0 88.105-34 165.511Q838-237 780.5-179.5t-134.946 91Q568.109-55 480.054-55M433-154v-652q-122 19-203 110.5T149-480q0 124 81 215t203 111m94 0q36-4 68.5-17.5T660-202H527zm0-103h197.706Q739-274 752.5-291t24.5-36H527zm0-126h267.741q9.065-16 10.796-33.667Q807.269-434.333 808-452H527zm0-125h281q-1-18-2.5-35.5T795-577H527zm0-125h250q-10-19-24-36l-28-34H527zm0-126h133q-32-16-64.5-30T527-806z" />
  </Svg>
);
