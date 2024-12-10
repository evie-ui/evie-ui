import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgQuickreplyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M760-215h-7q-20 0-33.5-13.5T706-262v-178q0-20 13.5-34t33.5-14h61q19 0 29.5 15.5T847-440l-40 122h31q19 0 29.5 16.5T870-267L782-66q-4 10-13 7t-9-12zm-545 0-79 79q-23 23-52 11.5T55-168v-643q0-39 27.5-67t66.5-28h662q39 0 67 28t28 67v216q0 20-14 33.5T858-548H741q-40 0-67.5 27.5T646-453v191q0 20-13.5 33.5T599-215z" />
  </Svg>
);
