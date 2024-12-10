import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLooks4 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M535-446v134q0 14.875 10.37 24.938Q555.74-277 571.07-277q14.905 0 24.917-10.062Q606-297.125 606-312v-336q0-14.875-10.088-24.938-10.087-10.062-25-10.062Q556-683 545.5-672.938 535-662.875 535-648v130H425v-130q0-14.875-10.088-24.938-10.087-10.062-25-10.062Q375-683 364.5-672.938 354-662.875 354-648v155q0 19.75 13.625 33.375T401-446zM189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
