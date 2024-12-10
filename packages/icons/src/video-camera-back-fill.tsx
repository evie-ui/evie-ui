import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgVideoCameraBackFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M252-333h306q14.375 0 20.688-13Q585-359 577-371l-81.82-111.756Q491-488 486.167-490.5q-4.834-2.5-10-2.5Q471-493 466-490.5t-9.19 7.793L389-391q-4 4-9 6t-10 2q-5 0-10-2t-9-6l-33-43q-4-5-9-7t-10-2q-5 0-10 2.5t-9.214 7.848L234-371q-9 12.438-2.281 25.219Q238.438-333 252-333M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h502q39.463 0 67.231 27.769Q746-770.463 746-731v206l119-119q10-11 25.5-5.125T906-628v296q0 15.25-15.5 21.125T865-316L746-435v206q0 39.05-27.769 66.525Q690.463-135 651-135z" />
  </Svg>
);