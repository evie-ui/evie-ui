import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBoxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39.8 0-66.9-27.1Q95-149.2 95-189v-493q0-15.882 5.5-31.059Q106-728.235 116-741l73-95q12.75-16.034 30.816-23.017Q237.882-866 258-866h444q19.085 0 37.164 6.983Q757.242-852.034 770-836l75 95q9 12.765 15 27.941 6 15.177 6 31.059v493q0 39.8-27.394 66.9Q811.213-95 771-95zm34-631h513l-36.409-46H259zm431 87H307v267q0 26 22 40.5t45 2.5l106-53 106 53q23 12 45.5-2.5T654-372z" />
  </Svg>
);
