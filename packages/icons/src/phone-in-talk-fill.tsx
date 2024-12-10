import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhoneInTalkFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M827-518q-13 0-23-9t-13-24q-14-100-86-172t-172-87q-15-2-24-12.5t-9-25.5q0-15 10.5-25t25.5-8q128 16 219 107.5T863-554q2 15-8.5 25.5T827-518m-184 0q-11 0-21.5-8T606-547q-9-27-29.5-47.5T529-624q-13-6-21-15.5t-8-21.5q0-18 12-28.5t29-5.5q49 14 85.5 50t51.5 86q4 16-6.5 28.5T643-518M797-95q-122 0-247-58T319-317Q212-424 153.5-549.5T95-796q0-29 20-49.5t49-20.5h140q31 0 50.5 16.5T381-802l27 110q4 26-1.5 46T385-612l-104 95q22 36 47 68t57 62q33 35 66.5 61t68.5 44l100-101q17-18 38-24t45 0l99 23q31 9 47.5 29t16.5 50v141q0 29-20.5 49T797-95" />
  </Svg>
);
