import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBungalowFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M310-109q-19.75 0-33.375-13.625T263-156v-224l-29 47q-10 14-26.5 18t-30.889-4.84q-14.389-9.84-18.5-27Q154-364 164-379l277-428q7.118-9.889 17.294-16.444Q468.471-830 480-830t21.706 6.556Q511.882-816.889 519-807l277 428q10 15 5.909 32.098Q797.818-329.805 783-320q-14 8-30.5 4.5T727-333l-30-47v224q0 19.75-13.625 33.375T650-109H521v-158q0-17.05-11.965-29.025Q497.07-308 480.035-308T451-296.025Q439-284.05 439-267v158zm169.965-293Q497-402 509-413.965t12-29Q521-460 509.035-472t-29-12Q463-484 451-472.035t-12 29Q439-426 450.965-414t29 12" />
  </Svg>
);
