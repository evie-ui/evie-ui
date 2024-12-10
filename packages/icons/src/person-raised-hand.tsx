import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPersonRaisedHand = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M98-10q-17.625 0-30.313-12.675Q55-35.351 55-53.675 55-72 67.688-84.5 80.374-97 98-97h764q18.05 0 31.025 12.738Q906-71.524 906-53.825 906-35 893.025-22.5T862-10zm83-147q-19.75 0-33.375-13.625T134-204v-182Q89-486 73-542.658 57-599.315 57-653q0-51 13.5-121T113-909q12-25 31.448-39.5Q163.897-963 189-963q27.587 0 42.793 20 15.207 20 18.14 59.067L258-736q4 42 23 78.5t49 63q30 26.5 68.423 41.5T480-538q89.469 0 148.934 10.021Q688.398-517.958 727-497q50 26 74 69.5T825-326v122q0 19.75-13.625 33.375T778-157zm40.055-87H738v-82q0-35.213-17-60.607Q704-412 668-430q-22-11-65-16t-123-5q-53 0-101.5-16T290-512.5q-40-29.5-68-71T182-676v-130q-16 22-27 72.5T144-653q0 53.352 19 105.176Q182-496 221.055-410zm259.193-349Q408-593 357.5-643.5t-50.5-123q0-72.5 50.544-123 50.545-50.5 122.5-50.5Q552-940 603-889.469T654-767q0 73-50.752 123.5t-123 50.5M480-680q36 0 61.5-25.5t25.5-61q0-35.5-25.5-61T480-853q-36 0-61 25.5t-25 61q0 35.5 25 61t61 25.5M327-157v-59q0-71 49.35-120.5T497-386h73q14.9 0 25.45 10.175 10.55 10.176 10.55 26Q606-334 595.875-324T570-314h-73q-41.4 0-69.7 28.361Q399-257.277 399-216v59zm153-610" />
  </Svg>
);
