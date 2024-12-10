import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTurnSharpLeftFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M633-142v-211H327q-38.775 0-66.388-27.612Q233-408.225 233-447v-239l-57 57q-14 15-33 15t-33-14.5Q96-643 96-661.733q0-18.734 14-33.267l136-136q14.727-14 34.364-14Q300-845 314-831l136 136q14 14.533 14 33.267Q464-643 450-628.5 436-614 417-614t-33-15l-57-57v239h306q38.775 0 66.387 27.612Q727-391.775 727-353v211q0 19.75-13.675 33.375Q699.649-95 679.825-95 660-95 646.5-108.625 633-122.25 633-142" />
  </Svg>
);
