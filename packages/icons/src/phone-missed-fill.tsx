import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhoneMissedFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m134-114-93-93q-16-16-16-42t16-42q87-93 195.5-141T480-480q135 0 244.5 47T920-291q15 16 15 42t-15 42l-94 93q-11 12-35 12.5T751-113l-104-77q-10-7-14.5-17t-4.5-21v-146q-38-14-74.5-19t-73.5-5q-37 0-73.5 5T332-374v146q0 11-4.5 21T314-190l-105 77q-16 12-39 12t-36-13m121-504q-18 0-30-12t-12-30v-158q0-20 13.5-34t33.5-14h160q17 0 29 12t12 30q0 17-12 29t-29 12h-69l134 132 182-182q12-11 29.5-12t29.5 11q11 12 11 29.5T725-775L551-601q-29 29-67.5 29T418-601L296-724v65q0 18-12 29.5T255-618" />
  </Svg>
);
