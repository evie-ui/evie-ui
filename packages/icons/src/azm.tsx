import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAzm = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M466-84q-23 23-52 10.75T385-117v-268H117q-31.5 0-43.75-29T84-466l321-321q13.429-13.087 31.013-20.543Q453.597-815 473-815h248q38.75 0 66.375 27.625T815-721v248q0 19.403-7.457 36.987Q800.087-418.429 787-405zm178-512v212l84-85v-259H469l-85 84h212q19.625 0 33.812 14.188Q644-615.625 644-596M472-425v212l85-84v-260H297l-84 85h212q19.75 0 33.375 13.625T472-425" />
  </Svg>
);
