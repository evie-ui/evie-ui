import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWifiPasswordFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M750 0q-15 0-25.5-10.5T714-36v-126q0-15 10.5-25.5T750-198h5v-39q0-35 23.5-58.5T837-319q35 0 58.5 23.5T919-237v39h5q15 0 25.5 10.5T960-162v126q0 15-10.5 25.5T924 0zm45-198h84v-39q0-19-11.5-30.5T837-279q-19 0-30.5 11.5T795-237zm-315 71q-36 0-63-27t-27-63q0-36 27-63t63-27q36 0 63 27t27 63q0 36-27 63t-63 27m0-433q75 0 140.5 25.5T749-457q17 14 18 37t-15 39q-17 17-40 17.5T669-376q-49-39-95-55t-94-16q-47 0-93 16t-95 54q-20 13-43.5 13.5T209-380q-17-16-16-39t18-37q63-52 128.5-78T480-560m0-240q125 0 236.5 46.5T917-629q18 15 19.5 38.5T922-551q-17 17-41.5 17.5T836-548q-79-64-166.5-101.5T480-687q-102 0-189.5 37.5T124-548q-20 15-43.5 14.5T40-551q-17-16-16-39.5T43-629q89-78 200.5-124.5T480-800" />
  </Svg>
);