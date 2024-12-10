import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTauntFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M197-419q-27 15-57 7.5T96-447q-16-33-5-67t47-46l337-118q16-6 32.432 1.67 16.432 7.671 27.386 28.194Q543-631 537.32-613.577 531.64-596.154 515-586zm130 316q-38.75 0-66.375-27.625T233-197v-158l380.872-201.908Q628-565 633.5-580.5 639-596 631-610l141-69q16-8 34.448-.554 18.448 7.445 30.156 30.663Q844-634 840.5-618q-3.5 16-17.5 26L567-400v203q0 38.75-27.625 66.375T473-103zm-56.101-491Q209-594 166.5-637.101t-42.5-105Q124-803 166.601-846t104.5-43Q332-889 375-845.899t43 104Q418-680 374.899-637t-104 43" />
  </Svg>
);
