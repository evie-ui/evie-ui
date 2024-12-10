import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCreditScoreFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39 0-66.5-27.5T55-229v-502q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v301q-32-25-71-23t-68 31L609-266l-42-44q-31-30-75-31t-74 30q-31 30-31 74t31 75l27 27zm0-507v139h662v-139zm460 461 200-199q13-13 31.5-13t31.5 13q13 13 13 31.5T872-317L643-88q-14 14-33.5 14T576-88L460-205q-14-14-13.5-32.5T461-269q13-14 31.5-13.5T525-268z" />
  </Svg>
);
