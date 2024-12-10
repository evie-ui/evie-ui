import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLayersFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M126-338q-18-13.941-18-36.971Q108-398 127.075-412q13.302-9 28.614-9.5Q171-422 184-412l295 230 297-230q13.324-9 28.162-9.5t29.088 8.466q19 13.949 18.875 37.492Q852-352 834-338L537-108q-25.5 20-57.75 20.5T421-108zm295 34L174-496q-37-28.882-37-74.441T174-644l247-193q25.5-20 57.75-20T537-837l247 193q37 27.882 37 73.441T784-496L537-304q-25.5 21-57.75 21T421-304" />
  </Svg>
);
