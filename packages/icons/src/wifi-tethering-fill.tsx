import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWifiTetheringFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M201-147q-12 12-30.5 11T141-151q-51-58-79-131.333Q34-355.667 34-440q0-91.686 35-173.343Q104-695 164.5-755.5 225-816 306.731-851t173.5-35Q572-886 653.5-851t142 95.5Q856-695 891-613.343 926-531.686 926-440q0 84.333-28 157.667Q870-209 819-151q-11 14-30 15t-31.217-11.217Q746-159 746.5-176.5T759-209q39-47 61.5-105.5T843-440q0-151-106-257T480-803q-151 0-257 106T117-440q0 67 22 126t62 106q12 15 12 32t-12 29m122.217-122.217Q310-256 293-256.5T265-270q-28-35-43.5-77.922Q206-390.845 206-440q0-115.167 79.382-195.083Q364.765-715 479.882-715 595-715 675-635.083 755-555.167 755-440q0 48.744-16 91.372T695-270q-11 14-27.5 14t-28.717-12.217Q626-281 626-298t9-31q17.143-23 26.571-51Q671-408 671-440q0-80.188-55.367-135.594Q560.266-631 480.133-631 400-631 344.5-575.594 289-520.188 289-440q0 32 9.429 59.844Q307.857-352.312 325-329q9 14 9.5 31t-11.283 28.783M479.85-337Q437-337 407-367.15q-30-30.151-30-73Q377-483 407.15-513q30.151-30 73-30Q523-543 553-512.85q30 30.151 30 73Q583-397 552.85-367q-30.151 30-73 30" />
  </Svg>
);
