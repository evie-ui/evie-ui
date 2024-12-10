import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgUnknown2Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.054-55Q392-55 314.612-88.283q-77.388-33.282-135.196-91.052-57.807-57.771-91.112-135.191Q55-391.947 55-479.974 55-568 88.5-645.5q33.5-77.5 91-135T314.489-872q77.49-34 165.594-34 88.105 0 165.511 34Q723-838 780.5-780.5T872-645.51q34 77.489 34 165.593 0 88.105-34 165.511Q838-237 780.5-179.5t-134.946 91Q568.109-55 480.054-55m.257-94q137.236 0 233.962-96.539Q811-342.078 811-479.5q0-66.5-25-126.5t-71-108L246-246.362q47.75 45.234 107.825 71.298T480.311-149M509-317q-13 0-21.5-8.79t-8.5-22.233q0-13.01 8.5-21.494Q496-378 509-378h147q12.867 0 21.933 8.526Q687-360.947 687-347.907q0 13.04-9.067 21.974Q668.867-317 656-317zM309-591v57q0 13 8.79 21.5t22.233 8.5q13.01 0 21.494-8.783Q370-521.567 370-535v-56h58q13 0 21.5-8.79t8.5-22.233q0-13.01-8.5-21.494Q441-652 428-652h-58v-57q0-13-8.5-21.5T340-739q-13 0-22 8.5t-9 21.5v57h-57q-13 0-21.5 8.5T222-622q0 13 8.783 22 8.784 9 22.217 9z" />
  </Svg>
);
