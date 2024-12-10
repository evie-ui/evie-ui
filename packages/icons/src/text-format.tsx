import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextFormat = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M230-189q-20 0-33.5-13.5T183-236q0-20 13.5-33.5T230-283h500q20 0 33.5 13.5T777-236q0 20-13.5 33.5T730-189zm59-237 145-362q4-10 13.5-16.5T468-811h30q11 0 21 7t14 17l144 360q8 21-4.5 38.5T637-371q-14 0-25-8.5T597-401l-29-76H392l-29 80q-5 12-14.5 19t-21.5 7q-21 0-33-17.5t-5-37.5m120-112h144l-70-189h-4z" />
  </Svg>
);
