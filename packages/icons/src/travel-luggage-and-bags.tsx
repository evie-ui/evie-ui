import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTravelLuggageAndBags = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M175-194v-457q0-40.213 27.1-67.606Q229.2-746 269-746h85v-130q0-16.55 11.513-28.775Q377.025-917 393.649-917h172.702q16.624 0 28.136 12.225Q606-892.55 606-876v130h85q40.213 0 67.606 27.394Q786-691.213 786-651v457q0 39.8-27.394 66.9Q731.213-100 691-100v21q0 15.3-9.925 25.65Q671.15-43 655-43q-16 0-30-8t-6-28v-21H341v21q0 15.3-9.925 25.65Q321.15-43 305-43q-16 0-30-8t-6-28v-21q-39.8 0-66.9-27.1Q175-154.2 175-194m250-552h110v-100H425zm55 254q55.591 0 109.795-12Q644-516 691-544.158V-651H269v106.985Q316-516 370.205-504 424.409-492 480-492m-36 94v-19q-47-3-91-15t-84-36v274h422v-275q-40 24-84 36t-91 16v19q0 15.3-9.975 25.65-9.976 10.35-26.2 10.35-16.225 0-26.025-9.925Q444-381.85 444-398m36-71" />
  </Svg>
);
