import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEject = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M213-260h534q19.75 0 33.875 13.675Q795-232.649 795-212.825 795-193 780.875-179.5 766.75-166 747-166H213q-19.75 0-33.375-13.675Q166-193.351 166-213.175 166-233 179.625-246.5 193.25-260 213-260m-2-166 230-346q6.545-10 16.985-15.5Q468.424-793 480-793t22.015 5.5Q512.455-782 519-772l230 346q16 24 2.25 49T710-352H250q-27.5 0-41.25-25t2.25-49m125-21h288L480-659z" />
  </Svg>
);
