import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgManageHistory = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M476-771q-59 0-112.5 24.5T269-680h48q15 0 25.5 10.5T353-644q0 16-10.5 26.5T317-607H171q-21 0-34.5-13.5T123-654v-145q0-15 10.5-25t25.5-10q15 0 25.5 10t10.5 25v60q55-59 127.5-93T476-866q156 0 267.5 104T863-505v10h-94v-13q-9-112-93.5-187.5T476-771m-5 676q-146-1-250.5-97.5T100-431q-3-17 9.5-31.5T142-478q19-1 33.5 11t19.5 30q11 98 81.5 166T446-198h12l59 100q-11 2-22.5 2.5T471-95m64-281-76-74q-7-6-10-14.5t-3-18.5v-165q0-15 10.5-25t25.5-10q15 0 25 10t10 25v154l56 54zM745-10q-14 0-23.5-8.5T710-40l-7-40q-16-3-30-11t-25-20l-35 7q-11 3-21-1t-15-14l-8-14q-7-10-5-21t11-20l30-28q-4-9-3.5-20t3.5-21l-30-29q-9-7-11-18.5t5-21.5l7-15q5-10 15-13.5t21-.5l36 7q11-12 25-20t30-12l7-39q2-13 12-21.5t23-8.5h11q13 0 23 8t12 21l7 40q15 4 29.5 12t26.5 20l34-7q10-2 20.5 2t17.5 14l6 11q7 11 5 23t-11 20l-30 28q4 9 3.5 20.5T896-202l30 29q9 8 11 19.5t-5 21.5l-7 14q-6 10-15.5 13.5t-20.5.5l-35-7q-12 12-26.5 20T798-80l-7 39q-2 14-12 22.5T756-10zm6-138q33 0 53.5-20.5T825-222q0-34-20.5-54.5T751-297q-34 0-54.5 20.5T676-222q0 33 20.5 53.5T751-148" />
  </Svg>
);
