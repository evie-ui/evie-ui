import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVacuum = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M154.235-69Q101.5-69 65.25-105.015 29-141.029 29-193.765q0-52.735 36.015-88.985Q101.029-319 153.765-319q52.735 0 88.985 36.015Q279-246.971 279-194.235q0 52.735-36.015 88.985Q206.971-69 154.235-69M154-140q24 0 39-15t15-39q0-24-15-39t-39-15q-24 0-39 15t-15 39q0 24 15 39t39 15m140 71q14.097-15.421 25.048-38.211Q330-130 334.449-151H423v-289q0-33-23.5-56.5T343-520H153v141q-19-1-41 3.5T71-360v-152q0-37.125 26.438-63.562Q123.874-602 161-602h35v-142q0-77.277 54.861-132.139Q305.723-931 382.842-931 442-931 489-900.5t70 84.5l275 665h56q17.425 0 29.213 11.777Q931-127.445 931-110.035q0 17.41-11.787 29.222Q907.425-69 890-69H684q-17.425 0-29.213-11.777Q643-92.555 643-109.965q0-17.41 11.787-29.223Q666.575-151 684-151h63L478.089-781.73Q464-812 440.314-830.5 416.628-849 382.995-849 341-849 309.5-817.5 278-786 278-743.778V-602h65.164q68.186 0 115.011 46.825Q505-508.35 505-440v277q0 38.75-27.625 66.375T411-69zm-6-267" />
  </Svg>
);
