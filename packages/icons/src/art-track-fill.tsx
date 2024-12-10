import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArtTrackFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M111-175q-39.05 0-66.525-27.475Q17-229.95 17-269v-422q0-39.463 27.475-67.231Q71.95-786 111-786h422q39.463 0 67.231 27.769Q628-730.463 628-691v422q0 39.05-27.769 66.525Q572.463-175 533-175zm187-205-50-69q-3-4-9.5-4.5T229-450l-56 74q-5 6-1.98 12.5T182-357h278.238q6.762 0 9.762-6.5 3-6.5-1-12.5l-77-101q-3-4-9-4t-9 4zm452 205q-16 0-26-10t-10-25.555V-750q0-15.15 10-25.575Q734-786 749.5-786t26 10.425Q786-765.15 786-750v539.445Q786-195 775.575-185T750-175m157.5 0q-15.5 0-26-10T871-210.555V-750q0-15.15 10.425-25.575Q891.85-786 907-786q16 0 26 10.425T943-750v539.445Q943-195 933-185t-25.5 10" />
  </Svg>
);
