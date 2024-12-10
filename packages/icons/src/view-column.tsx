import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewColumn = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M86-269v-422q0-39.188 27.612-67.094Q141.225-786 180-786h600q39.188 0 67.094 27.906Q875-730.188 875-691v422q0 38.775-27.906 66.388Q819.188-175 780-175H180q-38.775 0-66.388-27.612Q86-230.225 86-269m94 0h137v-422H180zm231 0h138v-422H411zm232 0h137v-422H643z" />
  </Svg>
);
