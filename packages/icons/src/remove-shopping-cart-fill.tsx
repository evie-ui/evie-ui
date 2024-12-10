import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRemoveShoppingCartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M654-454h-35L261-811h502q47 0 63.5 30.5T820-709L696.431-481.797Q691-472 683-464.5q-8 7.5-29 10.5M287-70q-30 0-51-21t-21-51q0-30 21-51t51-21q30 0 51 21t21 51q0 30-21 51t-51 21m554 41L591-278H264q-46.044 0-68.022-34Q174-346 198-383l75-118-86-181L55-815q-11-11-10.5-24.622T56-865q11-11 25.5-11t25.5 11L893-80q10 11 9.5 26T891-29q-11 11-25 11t-25-11M688-70q-29 0-50.5-21T616-142q0-30 21.5-51t50.5-21q29 0 50.5 21t21.5 51q0 30-21.5 51T688-70" />
  </Svg>
);
