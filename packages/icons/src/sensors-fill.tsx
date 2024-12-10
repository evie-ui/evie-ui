import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSensorsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M117-480q0 64 21.5 120.5T197-255q10 14 10 31.5T195-194q-12 12-29.5 11T136-198q-48-57-75-129T34-480q0-82 27-153.5T136-763q11-14 28.5-14.5T195-766q12 13 12 30.5T196-705q-37 47-58 103.5T117-480m172 0q0 29 7.5 55.5T319-376q9 15 8 32t-12 29q-13 12-29 11.5T259-317q-25-34-39-75t-14-88q0-46 14-87.5t39-75.5q9-13 26.5-14t29.5 11q12 12 12.5 30t-7.5 33q-15 22-23 48t-8 55m191 103q-43 0-73-30t-30-73q0-43 30-73t73-30q43 0 73 30t30 73q0 43-30 73t-73 30m191-103q0-29-7.5-55.5T640-585q-8-14-7.5-31t12.5-29q12-12 29-11.5t27 13.5q25 34 39.5 75.5T755-480q0 46-14.5 86.5T701-318q-11 13-27.5 14T645-316q-12-11-13-28t8-32q15-22 23-48.5t8-55.5m172 0q0-65-21.5-122T763-706q-11-14-10-31.5t13-29.5q12-12 30-11t29 15q48 59 74.5 130.5T926-480q0 81-26.5 153T825-198q-12 14-29.5 15T765-194q-12-12-12.5-29t10.5-31q37-47 58.5-104T843-480" />
  </Svg>
);
