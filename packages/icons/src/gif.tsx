import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGif = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M492.093-354q-12.96 0-21.526-8.5Q462-371 462-384v-192q0-13 8.474-21.5 8.473-8.5 21.433-8.5 12.96 0 21.526 8.5Q522-589 522-576v192q0 13-8.474 21.5-8.473 8.5-21.433 8.5M223-354q-18 0-29-11.5T183-394v-172q0-18.25 11-29.125T223-606h133q13 0 21.5 8.474 8.5 8.473 8.5 21.433 0 12.96-8.5 21.526Q369-546 356-546H242v132h85v-37q0-12.567 8.474-20.783Q343.947-480 356.907-480q12.526 0 20.81 8.217Q386-463.567 386-451v59q0 15.875-10.3 26.938Q365.4-354 347-354zm401.116 0q-12.516 0-21.316-8.5Q594-371 594-384v-192q0-13 8.5-21.5T624-606h123q13 0 21.5 8.474 8.5 8.473 8.5 21.433 0 12.96-8.5 21.526Q760-546 747-546h-94v55h52q12.567 0 20.783 8.777Q734-473.447 734-460.93q0 12.516-8.217 21.223Q717.567-431 705-431h-52v48q0 12.567-8.184 20.783-8.183 8.217-20.7 8.217" />
  </Svg>
);
