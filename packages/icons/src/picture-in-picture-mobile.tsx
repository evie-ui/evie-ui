import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPictureInPictureMobile = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M826-149q0 39.05-27.769 66.525Q770.463-55 731-55H229q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h502q39.463 0 67.231 27.769Q826-850.463 826-811zm-95 0v-662H229v662zm0-662H229zm-45 327v-241q0-19.75-13.625-33.375T639-772H476q-19.75 0-33.375 13.625T429-725v241q0 19.75 13.625 33.375T476-437h163q19.75 0 33.375-13.625T686-484m-60-13H489v-215h137z" />
  </Svg>
);
