import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTurnLeftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m275-511 57 56q14 15 13.5 34T331-388q-15 15-33.5 15T264-388L128-524q-14-14-14-34t14-34l137-136q14-15 33-15t34 15q14 14 14 33t-14 33l-57 57h328q38.75 0 66.375 27.625T697-511v329q0 19.75-13.675 33.375Q669.649-135 649.825-135 630-135 616.5-148.625 603-162.25 603-182v-329z" />
  </Svg>
);
