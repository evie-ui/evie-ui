import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSportsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M449.059-177q-110.976 0-187.017-76.208Q186-329.417 186-440q0-8.333.5-16.167Q187-464 188-470q-3 0-6 .5t-4.619.5q-53.82 0-88.6-34.454Q54-537.907 54-591.254q0-53.766 33.5-88.756T174.391-715q35.164 0 66.886 20Q273-675 288-647q27-23 69.82-39.5Q400.639-703 450-703h409q20 0 33.5 13.5T906-656v49q0 20-13.5 33.5T859-560H712v120q0 110.583-76.191 186.792Q559.618-177 449.059-177M177-551q18 0 29-11t11-29q0-18-11-29t-29-11q-18 0-29 11t-11 29q0 18 11 29t29 11m272 191q33 0 56.5-23.5T529-440q0-33-23.5-56.5T449-520q-33 0-56.5 23.5T369-440q0 33 23.5 56.5T449-360" />
  </Svg>
);
