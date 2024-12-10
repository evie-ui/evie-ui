import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHouseholdSuppliesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M313-63q-37 0-60-23t-23-60v-179q0-77 22-151t70-145q-46-3-72.5-34.5T223-728v-48q0-50 39.5-86.5T353-894l377 41q23 3 35.5 20t12.5 37v85q0 22-12.5 37.5T730-653l-23 1q7 33 24.5 60.5T771-543q12 13 15 30t-5 31q-9 15-26.5 18t-29.5-8q-39-33-67-80t-38-90l-62 8q11 57 29.5 101t53.5 98q20 32 30 71t10 78v140q0 37-23 60t-60 23zm-6-714v49q0 17 14 26t28 6l346-37v-41l-346-37q-14-1-28 8t-14 26" />
  </Svg>
);
