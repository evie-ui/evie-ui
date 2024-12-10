import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgThumbUp = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M839-617q36.6 0 65.8 28.5Q934-560 934-523v36.839q0 8.987 1 18.574Q936-458 932-451L802-148q-12.467 30.333-42.389 50.667Q729.689-77 697-77H249v-540l190-204q21.6-23 49.687-29 28.086-6 53.813 7 24.5 12 36 39.5t3.2 57.5L554-617zm-507 50v396h378l128-304v-48H445l44-212zM139-77q-39.8 0-66.9-27.1Q45-131.2 45-171v-352q0-38.75 27.1-66.375T139-617h110v94H139v352h110v94zm193-94v-396z" />
  </Svg>
);
