import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhotoFrameFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M194-83q-20 0-33.5-13.5T147-131v-44h-38q-39 0-66.5-27.5T15-269v-462q0-39 27.5-67t66.5-28h742q39 0 67 28t28 67v462q0 39-28 66.5T851-175h-37v44q0 21-14 34.5T766-83zm75-287h423q15 0 21-13t-2-25L588-570q-8-9-19.5-9.5T550-571L444-434l-70-84q-8-8-19-8.5t-18 8.5l-87 110q-9 12-2 25t21 13" />
  </Svg>
);