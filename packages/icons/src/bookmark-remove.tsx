import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBookmarkRemove = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M648-697q-17.85 0-29.925-12.175Q606-721.351 606-738.684q0-17.334 12.075-29.325T648-780h180q17.85 0 29.925 11.979T870-738.333Q870-721 857.925-709T828-697zM480-212l-174 74q-47 20-89-7.939T175-225v-551q0-39.463 27.475-67.231Q229.95-871 269-871h277v95H269v551l211-88.237L691-225v-322h95v322q0 51.122-42.5 79.061Q701-118 654-138zm0-564H269h277z" />
  </Svg>
);
