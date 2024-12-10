import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOverviewKey = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M111-175q-39.05 0-66.525-27.475Q17-229.95 17-269v-422q0-39.463 27.475-67.231Q71.95-786 111-786h422q39.463 0 67.231 27.769Q628-730.463 628-691v422q0 39.05-27.769 66.525Q572.463-175 533-175zm0-94h422v-422H111zm638.825 94q-16.225 0-26.025-9.925-9.8-9.925-9.8-25.63V-750q0-15.3 9.975-25.65 9.976-10.35 25.7-10.35 15.725 0 26.025 10.35Q786-765.3 786-750v539.445q0 15.705-10.4 25.63Q765.199-175 749.825-175m157.5 0q-15.725 0-26.025-9.925-10.3-9.925-10.3-25.63V-750q0-15.3 10.4-25.65Q891.801-786 907.175-786q16.225 0 26.025 10.35Q943-765.3 943-750v539.445q0 15.705-9.975 25.63-9.976 9.925-25.7 9.925M111-269v-422z" />
  </Svg>
);