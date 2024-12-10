import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDualScreenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M206-169q-27-11-43-34.5T147-256v-543q0-48 40.5-73.5T274-880l240 89q27 12 43.5 35t16.5 52v543q0 51-41.5 78.5T444-74zm428-18v-517q0-80-71-120.5T413-894h306q40 0 67.5 27.5T814-799v518q0 40-27.5 67T719-187z" />
  </Svg>
);
