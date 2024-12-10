import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalPostOfficeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M105-55q-21 0-35.5-14.5T55-105v-314q0-20.875 14.5-35.938Q84-470 105-470h116v-180q0-107.167 75.417-181.583Q371.833-906 480-906h173q105.167 0 179.083 75.417Q906-755.167 906-650v548q0 20-14.088 33.5-14.087 13.5-34 13.5Q838-55 824.5-68.5T811-102v-68H652v65q0 23-17.562 36.5Q616.875-55 594-55zm248-203-167.514-97q-12.243-7-24.364 0Q149-348 149-334q0 7 3 12.5t9 8.5l169 95q10.585 7 22.968 7 12.382 0 23.032-7l169-95q5-3 8.5-8.5T557-334q0-14-12.122-21-12.121-7-24.365 0zm299-6h159v-386.008Q811-717 765.619-764 720.237-811 653-811H480q-68 0-116.5 46.5T315-650v180h279q22.875 0 40.438 14Q652-442 652-419zM430-577q-13 0-21.5-8.5T400-607q0-13 8.5-21.5T430-637h266q13 0 21.5 8.5T726-607q0 13-8.5 21.5T696-577z" />
  </Svg>
);
