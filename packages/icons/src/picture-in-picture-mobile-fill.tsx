import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPictureInPictureMobileFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M826-149q0 39-28 66.5T731-55H229q-39 0-66.5-27.5T135-149v-662q0-39 27.5-67t66.5-28h502q39 0 67 28t28 67zM686-484v-241q0-20-13.5-33.5T639-772H476q-20 0-33.5 13.5T429-725v241q0 20 13.5 33.5T476-437h163q20 0 33.5-13.5T686-484" />
  </Svg>
);
