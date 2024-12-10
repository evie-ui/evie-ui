import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCaptivePortalFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M396-159q-27-39-42.5-81T327-334H180q33 69 87.5 113T396-159M161-392h155q-3-24-4-42.5t-1-43.5q0-20 .5-41t3.5-48H161q-7 24-9.5 44t-2.5 45q0 26 2.5 44t9.5 42m19-233h146q12-53 28.5-97t42.5-80q-83 29-132 68.5T180-625m208 0h185q-16-63-39-108.5T479-814q-32 36-55 83t-36 106m247 0h144q-34-63-90.5-108.5T562-801q26 36 43 80t30 96M480-55q-89 0-166.5-32.5t-135-89.5Q121-234 88-311.5T55-478q0-89 33-167t90.5-136q57.5-58 135-91.5T480-906q89 0 166.5 33.5t135 91.5q57.5 58 91 136T906-478q0 13-1 25.5t-3 25.5h-97q2-13 3.5-24.5T810-478q0-25-3-45t-9-44H644q1 30 2.5 49t1.5 40q0 9-.5 19.5L646-427h-61q1-17 2-28t1-23q0-20-.5-39t-3.5-50H377q-4 31-5 50t-1 39q0 20 1 37.5t5 48.5h156v58H388q19 74 40.5 117t50.5 69q16-16 30-36t24-42v166q-14 3-26.5 4T480-55m207-150v36q0 18-12.5 30T640-127q-20 0-33.5-13.5T593-174v-146q0-20 13.5-33.5T640-367h146q20 0 33.5 14t13.5 37q0 19-12 31t-30 12h-37l77 78q14 14 14.5 33T832-129q-14 14-33.5 14.5T765-128z" />
  </Svg>
);
