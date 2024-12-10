import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestCamFloodlight = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M674-582 554.895-701.045q-36.386-36.035-82.074-56.995Q427.134-779 376-779q-65 0-118.5 29.5T167-664q37-56 90.5-85.5T376-779q51.134 0 96.821 20.96 45.688 20.96 82.074 56.995zM0-233v-727h84.248Q119-960 143-935.906T167-877v57q32-53.389 85.432-86.194Q305.864-939 373.443-939H579q40.213 0 67.606 27.625Q674-883.75 674-845v263l19 18q27 27.901 27 66.451Q720-459 693-432L468-207q-26.934 28-65.484 28.5Q363.967-178 336-206L199-342q-9-9-17-19.5T167-383v66q0 35.225-24.241 59.612Q118.519-233 83.907-233zm373-619q-60 0-100 37.5T226-722q30-27 67.279-42 37.279-15 82.721-15 51.163 0 96.878 20.972T555-701l32 32v-183zM211-521.571q0 33.093 13 63.332Q237-428 261-404l141 140 233-234-144-144q-24-24-52.947-37-28.947-13-61.741-13Q305-692 258-641.261q-47 50.74-47 119.69M905-318H768v-87h137zM748-87l-95-96 60-60 96 95zM490 10v-137h87V10zm-64-485" />
  </Svg>
);
