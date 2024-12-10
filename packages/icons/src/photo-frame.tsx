import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhotoFrame = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M194-83q-19.75 0-33.375-13.625T147-131v-44h-38q-39.05 0-66.525-27.475Q15-229.95 15-269v-462q0-39.463 27.475-67.231Q69.95-826 109-826h742q39.463 0 67.231 27.769Q946-770.463 946-731v462q0 39.05-27.769 66.525Q890.463-175 851-175h-37v44q0 20.75-14.188 34.375Q785.625-83 766-83zm-85-186h742v-462H109zm160-101h423q15 0 21-13t-2-25L588-570q-8-9-19.5-9.5T550-571L444-434l-70-84q-8-8-19-8.5t-18 8.5l-87 110q-9 12-2.208 25 6.791 13 21.208 13M109-269v-462z" />
  </Svg>
);
