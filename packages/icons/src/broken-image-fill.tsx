import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBrokenImageFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39 0-66.5-27.5T95-189v-274l102 103q14 14 33.5 14t33.5-14l133-133 132 131q14 15 33.5 15t34.5-15l131-132 138 138v167q0 39-28 66.5T771-95zm0-771h582q39 0 67 28t28 67v279L763-594q-14-14-33.5-14T696-594L563-462 431-593q-14-14-33.5-14T364-593L231-461 95-598v-173q0-39 27.5-67t66.5-28" />
  </Svg>
);
