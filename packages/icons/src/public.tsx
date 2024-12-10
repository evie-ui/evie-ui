import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPublic = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.862-55q-88.024 0-165.443-33.5Q238-122 179.947-179.714q-58.052-57.715-91.5-135.06Q55-392.119 55-480.06 55-568 88.447-645.276q33.448-77.275 91.5-135Q238-838 315.536-872q77.535-34 165.692-34 88.157 0 165.109 34 76.953 34 134.808 91.5Q839-723 872.5-645.554q33.5 77.445 33.5 165.5 0 88.054-33.404 165.442t-91.382 135.196q-57.977 57.807-135.334 91.112Q568.524-55 480.862-55M439-150v-81q-35 0-58.017-25.412-23.016-25.413-23.016-59.588v-43L159-558q-5 20-7 38.5t-2 37.939q0 126.231 82 221.896Q314-164 439-150m286-105q21-23 37-49.5t27-55.5q11-29 16.5-59.341T811-482q0-101.854-56-185.927T605-791v17q0 33.763-24.147 58.881Q556.706-690 522.96-690H439v84.701Q439-588 425.5-577.5T394.701-567H315v85h251.195q16.575 0 27.69 13.144Q605-455.712 605-439.245V-316h41q28 0 49.58 17T725-255" />
  </Svg>
);
