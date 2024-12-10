import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgUpdateDisabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M484-95q-80 0-151-30.5t-123.5-83Q157-261 126-331.5T95-482q0-63 19-119t53-103L54-817q-10-10-10-24.5T55-867q11-11 25.5-11t25.5 11l761 762q10 10 10 25t-10 25q-11 11-25 11t-25-11L705-166q-47 35-103 53T484-95m0-94q42 0 81-12t71-34L235-635q-22 32-33.5 70T190-485q0 123 85.5 209.5T484-189m0-582q-40 0-75.5 10T341-732l-70-71q46-30 99.5-46.5T484-866q81 0 153.5 34T766-739v-60q0-15 10-25t26-10q15 0 25 10t10 25v145q0 20-13.5 33.5T790-607H644q-16 0-26-10.5T608-644q0-15 10.5-25.5T644-680h48q-42-42-95.5-66.5T484-771m33 215-60-60v-54q5-6 11.5-9.5T484-683q14 0 23.5 9.5T517-650zm286 286-70-70q15-21 23.5-45t9.5-55q5-18 19-29.5t33-10.5q20 2 33 15.5t10 32.5q-4 45-19 85.5T803-270" />
  </Svg>
);
