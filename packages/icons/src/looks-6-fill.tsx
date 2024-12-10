import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLooks6Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M425-277h110q32 0 51.5-19.5T606-348v-98q0-32-19.5-52T535-518H425v-94h103q15.15 0 25.075-10.395 9.925-10.394 9.925-25.5Q563-663 553.075-673T528-683H425q-32 0-51.5 19.5T354-612v264q0 32 19.5 51.5T425-277m0-169h110v98H425zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95z" />
  </Svg>
);