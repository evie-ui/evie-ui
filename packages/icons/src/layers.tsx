import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLayers = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M126-338q-18-13.941-18-36.971Q108-398 127.187-411.8q13.19-9.2 28.502-9.7Q171-422 184-412l295 230 297-230q13.324-9 28.162-9.5t29.199 8.266q19.007 14.502 18.823 37.868Q852-352 834-338L537-108q-25.5 20-57.697 20.5Q447.105-87 421-108zm295 34L174-496q-37-28.235-37-74.118Q137-616 174-644l247-193q25.5-20 57.75-20T537-837l247 193q37 28 37 73.5T784-496L537-304q-25.5 21-57.75 21T421-304m58-74 247-192-247-192-247 192zm0-192" />
  </Svg>
);
