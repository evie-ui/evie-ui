import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCaptureFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39 0-66.5-27.5T55-229v-502q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v502q0 39-28 66.5T811-135zm137-184h388q20 0 33.5-13.5T721-366v-228q0-20-13.5-33.5T674-641H286q-20 0-33.5 13.5T239-594v228q0 20 13.5 33.5T286-319" />
  </Svg>
);
