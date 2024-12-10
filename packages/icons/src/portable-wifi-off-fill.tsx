import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPortableWifiOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M817-55 307-563q-9 18-13.5 39t-4.5 44q0 32 9.5 60t26.5 51q9 14 9 31.5T322-308q-13 13-29.5 12T265-310q-28-35-43.5-78T206-480q0-40 10.5-76.5T246-624l-64-64q-30 44-47.5 97T117-480q0 67 22 126t62 106q12 15 12 32t-12 29q-12 12-30 11t-29-15q-51-58-79.5-131.5T34-480q0-76 23.5-144T123-748l-69-69q-10-10-10.5-24.5T54-867q11-11 25.5-11t25.5 11l762 762q10 10 10 25t-10 25q-11 11-25 11t-25-11m30-171-62-61q28-42 43-90.5T843-480q0-151-106-257T480-843q-54 0-103 15t-91 42l-60-61q55-37 118.5-58T480-926q92 0 173.5 35t142 95.5Q856-735 891-653.5T926-480q0 71-21 135t-58 119M722-351l-65-65q7-14 10.5-30t3.5-34q0-80-55.5-135.5T480-671q-18 0-34 3.5T416-657l-65-65q28-15 61-24t68-9q115 0 195 80t80 195q0 35-9 68t-24 61" />
  </Svg>
);
