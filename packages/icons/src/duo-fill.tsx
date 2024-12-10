import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDuoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.138-55Q392-55 314.612-88.283q-77.388-33.282-135.196-91.052-57.807-57.771-91.112-135.108Q55-391.781 55-479.89 55-568 88.5-645.5q33.5-77.5 91-135T314.406-872Q391.812-906 480-906h331q38.463 0 66.731 28.269Q906-849.463 906-811v331q0 88.188-34 165.594Q838-237 780.5-179.5t-134.862 91Q568.276-55 480.138-55M284-362h274v-87l126 87v-234l-126 87v-87H284z" />
  </Svg>
);
