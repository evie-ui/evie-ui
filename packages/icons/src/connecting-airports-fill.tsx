import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgConnectingAirportsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m801-293 18 59q2 9-3.5 15.5T802-212h-11q-5 0-8-2t-6-5l-24-33H636l44 150q2 10-3.5 18T661-76h-9q-5 0-9.5-2t-7.5-7l-98-167H412q-18 0-30-11.5T370-293q0-18 12-30t30-12h125l98-165q2-5 7.5-8t11.5-3h3q11 0 18 9t4 20l-43 147h117l24-32q2-4 6-6t9-2h6q10 0 16 8.5t3 18.5zM159-667l-18-59q-2-9 3.5-16t14.5-7h10q5 0 8 2.5t6 5.5l25 32h117l-45-150q-2-9 3.5-17.5T299-885h9q5 0 9.5 2.5t7.5 7.5l98 166h125q18 0 30 12t12 30q0 18-12 29.5T548-626H423l-98 165q-2 6-7 8.5t-10 2.5h-9q-8 0-14.5-9t-3.5-20l44-147H208l-24 32q-3 4-7 6t-9 2h-6q-10 0-16-8t-3-19z" />
  </Svg>
);