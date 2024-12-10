import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSignalCellularPauseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m136-136 689-689q22-22 51.5-10.344T906-792v364q0 19.75-14.125 33.375T858-381H706q-52.75 0-89.875 37.125T579-254v152q0 19.75-13.625 33.375T532-55H168q-31.688 0-43.344-29Q113-113 136-136m686 39v-163q0-17.75 12.175-29.375 12.176-11.625 30-11.625Q882-301 894-289.375T906-260v164q0 17.75-12.175 29.375Q881.649-55 863.825-55 846-55 834-67.125T822-97m-163 0v-163q0-17.75 12.175-29.375 12.176-11.625 30-11.625Q719-301 730.5-289.375T742-260v164q0 17.75-11.675 29.375Q718.649-55 700.825-55 683-55 671-67.125T659-97" />
  </Svg>
);
