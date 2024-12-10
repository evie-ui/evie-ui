import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSettings = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M407-55q-18 0-31.5-11T360-95l-15-94q-13-4-29.5-13.5T288-221l-86 41q-16 7-34 1.5T141-201L68-332q-10-16-5.5-33T81-393l80-58q-1-6-1.5-14.5T159-480q0-6 .5-14.5T161-509l-80-58q-14-11-18.5-28t5.5-33l73-130q9-16 27-22t34 1l88 40q10-8 26-17t29-13l15-97q2-17 15.5-28.5T407-906h146q18 0 31.5 11.5T600-866l15 96q13 5 29.5 13.5T672-739l86-40q16-7 34-1t27 22l74 129q9 16 5 33.5T878-567l-80 56q1 7 2 15.5t1 15.5q0 7-1 15t-2 15l80 57q15 11 19.5 28t-4.5 33l-75 132q-9 17-26.5 22t-33.5-2l-87-41q-11 9-26.5 18.5T615-189l-15 94q-2 18-15.5 29T553-55zm37-94h71l15-111q34-8 65-25t55-44l106 46 31-59-92-67q4-18 7-35.5t3-35.5q0-18-2.5-35.5T695-551l93-67-32-59-105 46q-23-28-54-47t-67-23l-14-110h-72l-13 110q-36 6-67.5 24.5T308-631l-104-46-32 59 91 66q-4 18-7 36t-3 36q0 18 3 36.5t7 35.5l-91 66 32 59 104-46q25 26 56.5 44t66.5 26zm34-201q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38m2-130" />
  </Svg>
);
