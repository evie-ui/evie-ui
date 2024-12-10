import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMemoryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M377-424v-111q0-19.75 13.625-33.375T424-582h111q19.75 0 33.375 13.625T582-535v111q0 19.75-13.625 33.375T535-377H424q-19.75 0-33.375-13.625T377-424m-34 304.5V-175h-74q-39.05 0-66.525-27.475Q175-229.95 175-269v-74h-55.719q-15.606 0-25.944-10.4Q83-363.801 83-379.175q0-14.95 10.494-24.887Q103.987-414 119.5-414H175v-136h-56q-15.3 0-25.65-10.37Q83-570.74 83-586.07q0-14.905 10.494-24.917Q103.987-621 119.5-621H175v-74q0-39.463 27.475-67.231Q229.95-790 269-790h74v-51.614q0-15.136 10.37-25.261T379.07-877q14.905 0 24.859 10.206 9.954 10.206 9.954 25.294v51.5H550v-51.5q0-15.088 10.37-25.294Q570.74-877 586.07-877q14.905 0 24.917 10.206Q621-856.588 621-841.5v51.5h74q39.463 0 67.231 27.769Q790-734.463 790-695v74h51.614q15.136 0 25.261 10.083Q877-600.835 877-585.93q0 15.33-10.206 25.572-10.206 10.241-25.294 10.241H790V-414h51.5q15.088 0 25.294 10.088 10.206 10.087 10.206 25Q877-364 866.794-353.5 856.588-343 841.5-343H790v74q0 39.05-27.769 66.525Q734.463-175 695-175h-74v55.719q0 15.606-10.118 25.944Q600.764-83 585.807-83q-14.957 0-25.382-10.494Q550-103.987 550-119.5V-175H414v56q0 15.3-10.088 25.65-10.087 10.35-25 10.35Q364-83 353.5-93.494 343-103.987 343-119.5M695-269v-426H269v426z" />
  </Svg>
);
