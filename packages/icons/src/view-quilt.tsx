import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewQuilt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-269v-422q0-39.188 27.612-67.094Q150.225-786 189-786h582q39.188 0 67.094 27.906Q866-730.188 866-691v422q0 38.775-27.906 66.388Q810.188-175 771-175H189q-38.775 0-66.388-27.612Q95-230.225 95-269m295-422v181h381v-181zm381 241H615v181h156zm-381 0v181h158v-181zM189-269h141v-422H189z" />
  </Svg>
);
