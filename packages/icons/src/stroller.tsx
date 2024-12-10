import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStroller = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M670.323-40Q646-40 628.5-57.677t-17.5-42.5Q611-124 628.677-142t42.5-18Q695-160 713-141.823t18 42.5Q731-75 712.823-57.5t-42.5 17.5m-430.5 0Q215-40 197.5-57.677t-17.5-42.5Q180-124 197.677-142t42.5-18Q265-160 282.5-141.823t17.5 42Q300-75 282.323-57.5t-42.5 17.5M344-314h262v-310zm-82 94q-37 0-52-33t9-61l445.092-525.998q19.165-22.022 49.03-37.512Q742.987-893 774.97-893q63.523 0 107.276 44.644Q926-803.711 926-741.118V-740q0 19.75-13.675 33.375-13.676 13.625-34 13.625Q858-693 844.5-706.695 831-720.39 831-739.855V-741q0-23.759-16.254-40.38Q798.492-798 775.277-798q-13.17 0-23.473 6.5Q741.5-785 731-772l-30 35.089V-314q0 38.775-27.906 66.387Q645.188-220 606-220zm157-368L214-793q-14-12.66-11.5-31.33Q205-843 220-853q42-24 92.068-36.5T412.5-902q55.091 0 110.795 16Q579-870 632-840zm-6-139 57-69q-14-6-28.5-8.5t-29.643-2.5Q394-807 376.5-805t-34.5 7zm0 0" />
  </Svg>
);