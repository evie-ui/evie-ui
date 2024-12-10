import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLeaderboard = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-189h158v-342H149zm252 0h158v-582H401zm252 0h158v-262H653zm-598 0v-342q0-40.213 27.1-67.606Q109.2-626 149-626h158v-145q0-40.213 27.625-67.606Q362.25-866 401-866h158q38.75 0 66.375 27.394Q653-811.213 653-771v225h158q40.213 0 67.606 27.394Q906-491.212 906-451v262q0 39.8-27.394 66.9Q851.213-95 811-95H149q-39.8 0-66.9-27.1Q55-149.2 55-189" />
  </Svg>
);
